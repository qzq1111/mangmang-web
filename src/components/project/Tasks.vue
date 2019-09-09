<template>
  <div>
    <Row :gutter="32">
      <Col span="6">
        <Input search enter-button="搜索任务" placeholder="Enter something..." />
      </Col>
      <Col span="2">
        <CreateTaskView @refresh="allTask"></CreateTaskView>
      </Col>
      <Col span="12">
        <Button type="dashed">指定我的</Button>
        <Button type="dashed">未关闭的</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed">Dashed</Button>
      </Col>
    </Row>
    <br />
    <Row :gutter="16">
      <Table :columns="columns" :data="taskList"></Table>
    </Row>
    <Row>
      <OpenTaskView ref="openTask" :taskId="taskId"></OpenTaskView>
    </Row>
    <Row>
      <DeleteTaskView ref="deleteTask" :task="task" @refresh="allTask"></DeleteTaskView>
    </Row>
  </div>
</template>
<script>
import { getTaskList } from "../../api/api";
import CreateTaskView from "./task/CreateTask";
import OpenTaskView from "./task/OpenTask";
import DeleteTaskView from "./task/DeleteTask";
export default {
  name: "Tasks",
  components: {
    CreateTaskView,
    OpenTaskView,
    DeleteTaskView
  },
  data() {
    return {
      taskId: "",
      task: {},
      columns: [
        {
          title: "任务编号",
          key: "task_number",
          render: (h, params) => {
            return h(
              "a",
              {
                on: {
                  click: () => {
                    this.taskId = params.row.task_id;
                    this.$refs["openTask"].open();
                  }
                }
              },
              `#${params.row.task_number}`
            );
          }
        },
        {
          title: "任务名称",
          key: "task_name"
        },
        {
          title: "任务优先级",
          key: "task_priority",
          render: (h, params) => {
            switch (params.row.task_priority) {
              case 0:
                return h("span", `低`);
              case 1:
                return h("span", `中`);
              case 2:
                return h("span", `高`);
              case 3:
                return h("span", `紧急`);
              default:
                return h("span", `低`);
            }
          }
        },
        {
          title: "任务类型",
          key: "task_type",
          render: (h, params) => {
            switch (params.row.task_type) {
              case 0:
                return h("span", "需求");
              case 1:
                return h("span", "功能点");
              case 2:
                return h("span", "BUG");
              case 3:
                return h("span", "支持");
            }
          }
        },
        {
          title: "任务状态",
          key: "task_status",
          render: (h, params) => {
            switch (params.row.task_status) {
              case 0:
                return h("span", "新建");
              case 1:
                return h("span", "处理中");
              case 2:
                return h("span", "已解决");
              case 3:
                return h("span", "反馈");
              case 4:
                return h("span", "拒绝");
              case 5:
                return h("span", "关闭");
              case 6:
                return h("span", "草稿");
              default:
                return h("span", "草稿");
            }
          }
        },
        {
          title: "任务人",
          key: "user_name"
        },
        {
          title: "任务进度",
          key: "task_schedule",
          render: (h, params) => {
            return h("span", `${params.row.task_schedule}%`);
          }
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
                      this.taskId = params.row.task_id;
                      this.$refs["openTask"].open();
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
                      this.task = params.row;
                      this.$refs["deleteTask"].open();
                      // deleteTask(params.row.task_id);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      taskList: []
    };
  },
  methods: {
    allTask: function() {
      getTaskList({ project_id: this.$route.params.key })
        .then(res => {
          var data = res.data;
          if (data.code === 0) {
            this.taskList = data.data.tasks;
          }
        })
        .catch(err => {});
    },
  },
  created: function() {
    this.allTask();
  }
};
</script>
<style scoped>
</style>