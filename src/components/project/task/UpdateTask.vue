<template>
  <div>
    <Modal v-model="taskModal" title="编辑任务" @on-ok="onUpdateTask('task')" :loading="loading">
      <Form :model="task" label-position="top" :rules="taskRuleValidate" ref="task">
        <FormItem label="任务名称" prop="task_name">
          <Input v-model="task.task_name" placeholder="请输任务名称"></Input>
        </FormItem>
        <FormItem label="任务描述" prop="task_content">
          <Input
            v-model="task.task_content"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="请输入任务描述"
          ></Input>
        </FormItem>

        <FormItem label="任务类型" prop="task_type">
          <Select v-model="task.task_type" clearable>
            <Option :value="0">需求</Option>
            <Option :value="1">功能点</Option>
            <Option :value="2">BUG</Option>
            <Option :value="3">支持</Option>
          </Select>
        </FormItem>

        <FormItem label="任务状态" prop="task_status">
          <Select v-model="task.task_status" clearable>
            <Option :value="0">新建</Option>
            <Option :value="1">处理中</Option>
            <Option :value="2">已解决</Option>
            <Option :value="3">反馈</Option>
            <Option :value="4">拒绝</Option>
            <Option :value="5">关闭</Option>
            <Option :value="6">草稿</Option>
          </Select>
        </FormItem>

        <FormItem label="任务优先级" prop="task_priority">
          <Select v-model="task.task_priority" clearable>
            <Option :value="0">低</Option>
            <Option :value="1">中</Option>
            <Option :value="2">高</Option>
            <Option :value="3">紧急</Option>
          </Select>
        </FormItem>

        <FormItem label="父级任务" prop="father_task_id">
          <Select v-model="task.father_task_id" filterable clearable>
            <Option
              v-for="(task, index) in fatherTaskList"
              :value="task.task_id"
              :key="index"
              :label="`#${task.task_number} ${task.task_name}`"
            ></Option>
          </Select>
        </FormItem>

        <Row :gutter="36">
          <Col span="12">
            <FormItem label="任务开始时间" prop="start_time">
              <DatePicker type="date" placeholder="Select date" v-model="task.start_time"></DatePicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="任务完成时间" prop="end_time">
              <DatePicker type="date" placeholder="Select date" v-model="task.end_time"></DatePicker>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="任务人" prop="user_id">
          <Select v-model="task.user_id" filterable clearable>
            <Option
              v-for="(user, index) in projectUserList"
              :value="user.user_id"
              :key="index"
              :label="`#${user.role_name} ${user.user_name}`"
            ></Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
import { getFatherTask, getProjectUser } from "../../../api/api";
import { datetimeFormat } from "../../../lib/utils";
export default {
  name: "UpdateTaskView",
  data() {
    return {
      taskModal: false,
      loading: true,
      task: {},
      taskRuleValidate: {
        task_name: [
          {
            required: true,
            message: "请输入任务名称",
            trigger: "blur"
          }
        ],
        task_content: [
          {
            required: true,
            message: "请输入任务内容",
            trigger: "blur"
          }
        ],
        task_type: [
          {
            required: true,
            message: "请选择任务类型",
            trigger: "change",
            type: "number"
          }
        ],
        task_status: [
          {
            required: true,
            message: "请选择任务状态",
            trigger: "change",
            type: "number"
          }
        ],
        task_priority: [
          {
            required: true,
            message: "请选择任务优先级",
            trigger: "change",
            type: "number"
          }
        ],
        father_task_id: [
          {
            required: false
          }
        ],
        start_time: [
          {
            required: false
          }
        ],
        end_time: [
          {
            required: false
          }
        ],
        user_id: [
          {
            required: false
          }
        ]
      },
      fatherTaskList: [],
      projectUserList: []
    };
  },
  methods: {
    fatherTask: function() {
      getFatherTask({ project_id: this.$route.params.key })
        .then(res => {
          var data = res.data;
          if (data.code === 0) {
            this.fatherTaskList = data.data;
          } else {
            this.fatherTaskList = [];
          }
        })
        .catch(err => {});
    },
    projectUser: function() {
      getProjectUser({ project_id: this.$route.params.key })
        .then(res => {
          var data = res.data;
          if (data.code === 0) {
            this.projectUserList = data.data;
          } else {
            this.projectUserList = [];
          }
        })
        .catch(err => {});
    },
    open: function(task) {
      this.task = task;
      console.log(this.task)
      this.taskModal = true;

      //   this.$refs[name].resetFields();

        this.fatherTask();
        this.projectUser();
    }
  }
};
</script>
<style scoped>
</style>