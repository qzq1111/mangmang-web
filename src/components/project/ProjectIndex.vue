<template>
  <Tabs value="overview" @on-click="changeTab">
    <TabPane label="项目概览" name="overview">
      <overview ref="overview"></overview>
    </TabPane>
    <TabPane label="项目动态" name="dynamics">
      <dynamics ref="dynamics"></dynamics>
    </TabPane>
    <TabPane label="项目任务" name="tasks">
      <tasks ref="tasks"></tasks>
    </TabPane>
    <TabPane label="项目管理" name="settings">
      <settings ref="settings"></settings>
    </TabPane>
  </Tabs>
</template>
<script>
import Overview from "./Overview";
import Dynamics from "./Dynamics";
import Settings from "./Settings";
import Tasks from "./Tasks";

export default {
  name: "ProjectIndex",
  components: {
    Overview,
    Dynamics,
    Tasks,
    Settings
  },
  methods: {
    changeTab: function(name) {
      switch (name) {
        case "overview":
          break;
        case "dynamics":
          break;
        case "tasks": {
          this.$refs.tasks.onGetTaskList()
          break;
        }
        case "settings":
          break;
      }
    }
  },
};
</script>

<style scoped>
</style>
