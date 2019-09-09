<template>
  <Modal v-model="flag" @on-ok="onDeleteTask" :styles="{top: '200px'}">
    <h1 style="color:red">是否删除 <strong>#{{task.task_number}}-{{task.task_name}}</strong> 任务？ </h1>
  </Modal>
</template>
<script>
import { deleteTask } from "../../../api/api";
export default {
  name: "DeleteTaskView",
  data() {
    return {
      flag: false
    };
  },
  methods: {
    onDeleteTask: function() {
      deleteTask(this.task.task_id)
        .then(res => {
          let data = res.data;
          if (data.code === 0) {
            this.$Message.success(data.msg);
            this.$emit('refresh');
          } else {
            this.$Message.error(data.msg);
          }
        })
        .catch(err => {
          this.$Message.error("err");
        });
    },
    open() {
      this.flag = true;
    }
  },
  props: {
    task: {
      type: Object,
    },
  }
};
</script>