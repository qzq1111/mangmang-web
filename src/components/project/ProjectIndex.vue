<template>
  <Row>
    <Tabs value="name1">
      <TabPane label="项目概览" name="name1">
        <overview></overview>
      </TabPane>
      <TabPane label="项目动态" name="name2">
        <dynamics></dynamics>
      </TabPane>
      <TabPane label="项目任务" name="name3">
        <tasks></tasks>
      </TabPane>
      <TabPane label="项目管理" name="name4">
        <settings></settings>
      </TabPane>
    </Tabs>
  </Row>
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
    Settings,
    
  }
};
</script>

<style scoped>
</style>
