<template>
  <div>
    <Row :gutter="32">
      <Col span="6">
        <Input search enter-button="搜索任务" placeholder="Enter something..." />
      </Col>
      <Col>
        <div>
          <Button type="primary" @click="taskModal = true">添加任务</Button>
          <Modal v-model="taskModal" title="添加任务" @on-ok="createTask">
            <Form :model="task" label-position="top">
              <FormItem label="任务名称">
                <Input v-model="task.task_name" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem label="任务描述">
                <Input
                  v-model="task.task_content"
                  type="textarea"
                  :autosize="{minRows: 2,maxRows: 5}"
                  placeholder="Enter something..."
                ></Input>
              </FormItem>
              <Row :gutter="36">
                <Col span="11">
                  <FormItem label="任务类型">
                    <Select v-model="task.task_type">
                      <Option value="0">需求</Option>
                      <Option value="1">功能点</Option>
                      <Option value="2">BUG</Option>
                      <Option value="3">支持</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col span="11">
                  <FormItem label="任务状态">
                    <Select v-model="task.task_status">
                      <Option value="0">新建</Option>
                      <Option value="1">处理中</Option>
                      <Option value="2">已解决</Option>
                      <Option value="3">反馈</Option>
                      <Option value="4">拒绝</Option>
                      <Option value="5">关闭</Option>
                      <Option value="6">草稿</Option>
                    </Select>
                  </FormItem>
                </Col>
              </Row>
              <Row :gutter="36">
                <Col span="11">
                  <FormItem label="任务优先级">
                    <Select v-model="task.task_priority">
                      <Option value="0">0-低</Option>
                      <Option value="1">1-中</Option>
                      <Option value="2">2-高</Option>
                      <Option value="3">3-紧急</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col span="11">
                  <FormItem label="父级任务">
                    <Select v-model="task.father_task_id">
                      <Option value="0">秦</Option>
                      <Option value="1">熊</Option>
                      <Option value="2">张</Option>
                      <Option value="3">李</Option>
                    </Select>
                  </FormItem>
                </Col>
              </Row>
              <Row :gutter="36">
                <Col span="11">
                  <FormItem label="任务开始时间">
                    <DatePicker type="date" placeholder="Select date" v-model="task.start_time"></DatePicker>
                  </FormItem>
                </Col>
                <Col span="11">
                  <FormItem label="任务完成时间">
                    <DatePicker type="date" placeholder="Select date" v-model="task.end_time"></DatePicker>
                  </FormItem>
                </Col>
              </Row>
              <FormItem label="任务人">
                <Select v-model="task.user_id">
                  <Option value="0">秦</Option>
                  <Option value="1">熊</Option>
                  <Option value="2">张</Option>
                  <Option value="3">李</Option>
                </Select>
              </FormItem>
            </Form>
          </Modal>
          <Button type="dashed">指定我的</Button>
          <Button type="dashed">未关闭的</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed">Dashed</Button>
        </div>
      </Col>
    </Row>
    <br />
    <Row :gutter="16">
      <Table :columns="columns" :data="data"></Table>
    </Row>
  </div>
</template>
<script>
import { getTaskList } from "../../api/api";
export default {
  name: "Tasks",
  data() {
    return {
      taskModal: false,
      task: {
        father_task_id: "",
        project_id: "",
        user_id: "",
        task_name: "",
        task_priority: "",
        task_type: "",
        task_status: "",
        task_content: "",
        start_time: "",
        end_time: ""
      },
      columns: [
        {
          title: "任务名称",
          key: "task_name"
        },
        {
          title: "任务优先级",
          key: "task_priority"
        },
        {
          title: "任务类型",
          key: "task_type"
        },
        {
          title: "任务状态",
          key: "task_status"
        },
        {
          title: "任务人",
          key: "user_id"
        },
        {
          title: "开始时间",
          key: "start_time"
        },
        {
          title: "计划完成时间",
          key: "end_time"
        },
        {
          title: "操作",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      // this.show(params.index);
                    }
                  }
                },
                "查看"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      // this.remove(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data: []
    };
  },
  methods: {
    taskList: function() {
      getTaskList({ project_id: this.$route.params.key })
        .then(res => {
          var data = res.data;
          if (data.code === 0) {
            this.data = data.data.tasks;
          }
        })
        .catch(err => {});
    },
    createTask: function() {
      console.log(this.task);
    }
  },
};
</script>
<style scoped>
</style>