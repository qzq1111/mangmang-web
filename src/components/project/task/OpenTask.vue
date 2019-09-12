<template>
  <div>
    <Drawer title="任务详情" v-model="flag" width="850" :mask-closable="true">
      <Row>
        <div :style="{position:'absolute'}">
          <Avatar
            :src="task.creator_avatar"
            :style="{width:'60px',height:'60px',borderRadius: '30px'}"
          />
        </div>
        <div :style="{marginLeft:'70px'}">
          <h1>{{task.task_name}}</h1>
          <p :style="{fontSize:'15px'}">
            由
            <a :href="task.task_creator_id">{{task.task_creator}}</a>
            <Time :time="new Date(task.create_time)" :interval="1" />添加. 更新于
            <Time :time=" new Date(task.update_time)" :interval="1" />.
          </p>
        </div>
      </Row>
      <Divider />
      <Row :style="{textAlign: 'right',fontSize:'15px'}">
        <a @click="onUpdateTask(task)">编辑</a>
      </Row>
      <Row :gutter="36">
        <Col span="12">
          <Row>
            <Col span="12">
              <h3>类型:</h3>
            </Col>
            <Col span="12">
              <span v-if="task.task_type ===0">需求</span>
              <span v-else-if="task.task_type ===1">功能点</span>
              <span v-else-if="task.task_type ===2">BUG</span>
              <span v-else-if="task.task_type ===3">支持</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <h3>状态:</h3>
            </Col>
            <Col span="12">
              <span v-if="task.task_status===0">新建</span>
              <span v-else-if="task.task_status== 1">处理中</span>
              <span v-else-if="task.task_status===2">已解决</span>
              <span v-else-if="task.task_status===3">反馈</span>
              <span v-else-if="task.task_status===4">拒绝</span>
              <span v-else-if="task.task_status===5">关闭</span>
              <span v-else-if="task.task_status===6">草稿</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <h3>优先级:</h3>
            </Col>
            <Col span="12">
              <span v-if="task.task_priority===0">低</span>
              <span v-else-if="task.task_priority===1">中</span>
              <span v-else-if="task.task_priority===2">高</span>
              <span v-else-if="task.task_priority===3">紧急</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <h3>指派给:</h3>
            </Col>
            <Col span="12">
              <a>{{task.task_finisher}}</a>
            </Col>
          </Row>
        </Col>
        <Col span="12">
          <Row>
            <Col span="12">
              <h3>开始时间:</h3>
            </Col>
            <Col span="12">
              <p>{{task.start_time}}</p>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <h3>结束时间:</h3>
            </Col>
            <Col span="12">
              <p>{{task.end_time}}</p>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <h3>完成度:</h3>
            </Col>
            <Col span="12">
              <Progress :percent="task.task_schedule" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Row>
        <h2>任务描述</h2>
        <p>{{task.task_content}}</p>
      </Row>
      <Divider />
      <Row>
        <h2>子任务</h2>
        <Col span="24" v-for="item in childTask" :key="item.task_id">
          <Row>
            <Col span="8">
              <p :style="{paddingTop:'10px',fontSize:'15px'}">
                <a @click="onChangeTask(item.task_id)">
                  <span v-if="task.task_type ===0">需求</span>
                  <span v-else-if="task.task_type ===1">功能点</span>
                  <span v-else-if="task.task_type ===2">BUG</span>
                  <span v-else-if="task.task_type ===3">支持</span>
                  <span v-else>&nbsp;</span>
                  <span>#{{item.task_number}}</span>
                </a>
                <span>： {{item.task_name}}</span>
              </p>
            </Col>
            <Col span="4">
              <span v-if="item.task_status===0">新建</span>
              <span v-else-if="item.task_status== 1">处理中</span>
              <span v-else-if="item.task_status===2">已解决</span>
              <span v-else-if="item.task_status===3">反馈</span>
              <span v-else-if="item.task_status===4">拒绝</span>
              <span v-else-if="item.task_status===5">关闭</span>
              <span v-else-if="item.task_status===6">草稿</span>
              <span v-else>&nbsp;</span>
            </Col>
            <Col span="4">
              <a>{{item.task_finisher}}&nbsp;</a>
            </Col>
            <Col span="2">
              <p :style>完成度%：</p>
            </Col>
            <Col span="6">
              <Progress :percent="item.task_schedule" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Row>
        <h2>动态</h2>
      </Row>
      <!-- <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="flag = false">Cancel</Button>
        <Button type="primary" @click="flag = false">Submit</Button>
      </div>-->
    </Drawer>
    <UpdateTaskView ref="openUpdate"></UpdateTaskView>
  </div>
</template>
<script>
import { getTask } from "../../../api/api";
import UpdateTaskView from "./UpdateTask";
export default {
  name: "OpenTaskView",
  components: {
    UpdateTaskView
  },
  data() {
    return {
      flag: false,
      task: {
        // create_time: "",
        // creator_avatar: "",
        // data_status: "",
        // end_time: "",
        // father_task_id: "",
        // father_task_name: "",
        // father_task_number: "",
        // project_id: "",
        // start_time: "",
        // task_content: "",
        // task_creator: "",
        // task_creator_id: "",
        // task_finisher: "",
        // task_finisher_id: "",
        // task_id: "",
        // task_name: "",
        // task_number: "",
        // task_priority: "",
        // task_schedule: "",
        // task_status: "",
        // task_type: "",
        // update_time: ""
      },
      childTask: []
    };
  },
  methods: {
    open: function(taskId) {
      this.taskInfo(taskId);
      this.flag = true;
    },
    onChangeTask: function(taskId) {
      this.taskInfo(taskId);
    },
    taskInfo: function(taskId) {
      getTask({ key: taskId })
        .then(res => {
          var data = res.data;
          if (data.code === 0) {
            this.task = data.data.info;
            this.childTask = data.data.child;
            this.$Message.success(data.msg);
          } else {
            this.task = {};
            this.childTask = [];
            this.$Message.err(data.msg);
          }
        })
        .catch(err => {});
    },
    onUpdateTask: function(task) {
      this.$refs["openUpdate"].open(task);
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
.ivu-drawer-body {
  overflow-x: hidden;
}
</style>