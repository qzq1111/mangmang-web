<template>
  <div>
    <Row :gutter="32">
      <Col span="6">
        <Input search enter-button="搜索任务" placeholder="Enter something..." />
      </Col>
      <Col>
        <div>
          <Button type="primary" @click="onClickCreateTask('task')">添加任务</Button>
          <Modal v-model="taskModal" title="添加任务" @on-ok="onCreateTask('task')" :loading="loading">
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
      <Table :columns="columns" :data="taskList"></Table>
    </Row>
  </div>
</template>
<script>
import {
  getTaskList,
  getFatherTask,
  getProjectUser,
  createTask,
  deleteTask
} from "../../api/api";
import { datetimeFormat } from "../../lib/utils";
export default {
  name: "Tasks",
  data() {
    return {
      taskModal: false,
      loading: true,
      task: {
        father_task_id: "",
        project_id: "",
        user_id: "",
        task_name: "",
        task_priority: 0,
        task_type: 0,
        task_status: 0,
        task_content: "",
        start_time: "",
        end_time: ""
      },
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

      columns: [
        {
          title: "任务编号",
          key: "task_number",
          render: (h, params) => {
            return h(
              "a",
              {
                click: () => {
                  // console.log(params.index);
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
                      console.log(params.row.task_id);
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
                      deleteTask(params.row.task_id);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      taskList: [],
      fatherTaskList: [],
      projectUserList: []
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
    onClickCreateTask: function(name) {
      this.taskModal = true;
      this.$refs[name].resetFields();
      this.fatherTask();
      this.projectUser();
    },
    onCreateTask: function(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          let start_time, end_time;
          if (this.task.start_time !== "") {
            start_time = datetimeFormat(
              "yyyy-MM-dd hh:mm:ss",
              new Date(this.task.start_time)
            );
          } else {
            start_time = null;
          }

          if (this.task.end_time !== "") {
            end_time = datetimeFormat(
              "yyyy-MM-dd hh:mm:ss",
              new Date(this.task.end_time)
            );
          } else {
            end_time = null;
          }

          createTask({
            father_task_id: this.task.father_task_id,
            project_id: this.$route.params.key,
            user_id: this.task.user_id,
            task_name: this.task.task_name,
            task_priority: this.task.task_priority,
            task_type: this.task.task_type,
            task_status: this.task.task_status,
            task_content: this.task.task_content,
            start_time: start_time,
            end_time: end_time
          })
            .then(res => {
              let data = res.data;
              if (data.code === 0) {
                this.$Message.success(data.msg);
                this.taskModal = false;
                this.allTask();
              } else {
                this.$Message.error(data.msg);
                this.loading = false;
                this.$nextTick(() => {
                  this.loading = true;
                });
              }
            })
            .catch(err => {
              this.$Message.console.error("err");
              this.loading = false;
              this.$nextTick(() => {
                this.loading = true;
              });
            });
        } else {
          this.loading = false;
          this.$nextTick(() => {
            this.loading = true;
          });
        }
      });
    },
    onDeleteTask: function(task_id) {
      deleteTask(task_id)
        .then(res => {
          let data = res.data;
          if (data.code === 0) {
            this.$Message.success(data.msg);
            this.allTask();
          } else {
            this.$Message.error(data.msg);
          }
        })
        .catch(err => {
          this.$Message.error("err");
        });
    }
  },
  created: function() {
    this.allTask();
  }
};
</script>
<style scoped>
</style>