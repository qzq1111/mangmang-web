<template>
  <div>
    <Drawer title="任务详情" v-model="flag" width="850" :mask-closable="true">
      <Row>
        <h1>{{task.task_name}}</h1>
      </Row>
      <Row>
        <p>任务描述：{{task.task_content}}</p>
      </Row>
      <Row :gutter="36">
        <Col span="12">
          <p>
            类型:
            <span v-if="task.task_type ===0">需求</span>
            <span v-else-if="task.task_type ===1">功能点</span>
            <span v-else-if="task.task_type ===2">BUG</span>
            <span v-else-if="task.task_type ===3">支持</span>
          </p>
        </Col>
        <Col span="12">
          <p>
            状态:
            <span v-if="task.task_status===0">新建</span>
            <span v-else-if="task.task_status== 1">处理中</span>
            <span v-else-if="task.task_status===2">已解决</span>
            <span v-else-if="task.task_status===3">反馈</span>
            <span v-else-if="task.task_status===4">拒绝</span>
            <span v-else-if="task.task_status===5">关闭</span>
            <span v-else-if="task.task_status===6">草稿</span>
          </p>
        </Col>
      </Row>
      <Row :gutter="36">
        <Col span="12">
          <p>
            优先级:
            <span v-if="task.task_priority===0">低</span>
            <span v-else-if="task.task_priority===1">中</span>
            <span v-else-if="task.task_priority===2">高</span>
            <span v-else-if="task.task_priority===3">紧急</span>
          </p>
        </Col>
        <Col span="12">
          <p>指派给:{{task.task_finisher_id}}</p>
        </Col>
      </Row>
      <Row :gutter="36">
        <Col span="12">
          <p>开始时间:{{task.start_time}}</p>
        </Col>
        <Col span="12">
          <p>结束时间:{{task.end_time}}</p>
        </Col>
      </Row>
      <Row :gutter="36">
        <Col span="12">
          <Row>
            <Col span="12">完成度:</Col>
            <Col span="12">
              <Progress :percent="task.task_schedule" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <h1>子任务</h1>
      </Row>
      <Row>
        <h1>父任务</h1>
      </Row>
      <Row>
        <Tabs value="name1">
          <TabPane label="动态" name="name1">动态</TabPane>
        </Tabs>
      </Row>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="flag = false">Cancel</Button>
        <Button type="primary" @click="flag = false">Submit</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
import { getTask } from "../../../api/api";
export default {
  name: "OpenTaskView",
  data() {
    return {
      flag: false,

      task: {
        end_time: null,
        father_task_id: "",
        project_id: "",
        start_time: null,
        task_content: "",
        task_id: "",
        task_name: "",
        task_priority: 0,
        task_schedule: 0,
        task_status: 0,
        task_type: 0,
        user_id: ""
      }
    };
  },
  methods: {
    open: function(taskId) {
      this.taskInfo(taskId);
      this.flag = true;
    },
    taskInfo: function(taskId) {
      getTask({ project_id: this.$route.params.key, key: taskId })
        .then(res => {
          var data = res.data;
          console.log(data);
          if (data.code === 0) {
            this.task = data.data;
          } else {
          }
        })
        .catch(err => {});
    }
  }
};
</script>
<style>
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
</style>