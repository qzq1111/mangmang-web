<template>
  <Tabs type="card" :value="isTab" @on-tab-remove="handleTabRemove" @on-click="currentTabChanged">
    <TabPane label="项目管理" name="-1">
      <project-management v-on:child-say="listenToMyBoy" :closable="false"></project-management>
    </TabPane>
    <TabPane
      v-for="(tab,index) in tabsList"
      :key="tab.id"
      :label="tab.name"
      :closable="true"
      :name="tab.id"
    >
      <project-tasks v-bind:id="tab.id"></project-tasks>
    </TabPane>
  </Tabs>
</template>
<script>
import ProjectManagement from "./ProjectManagement";
import ProjectTasks from "./ProjectTasks";
export default {
  name: "ProjectMain",
  components: {
    ProjectManagement,
    ProjectTasks
  },
  data() {
    return {
      isTab: "-1",
      tabsList: []
    };
  },
  methods: {
    currentTabChanged: function(name) {
      this.isTab = name;
    },

    listenToMyBoy: function(data) {
      if (this.tabsList.findIndex(x => x.id == data.id) < 0) {
        // this.tabsList.push({ id: data.id, name: data.name });
        this.tabsList.push(data);
      }
      this.isTab = data.id;
    },
    handleTabRemove(id) {
      let index = this.tabsList.findIndex(x => x.id == id);
      this.tabsList.splice(index, 1);
    }
  }
};
</script>

<style scoped>
</style>
