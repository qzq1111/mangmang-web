<template>
  <Row :gutter="16">
    <Col span="7">
      <profile></profile>
    </Col>
    <Col span="17">
      <Card dis-hover>
        <Tabs value="businessCard" @on-click="changeTab">
          <TabPane label="名片" name="businessCard">
            <business-card ref="businessCard"></business-card>
          </TabPane>
          <TabPane label="项目" name="name2"></TabPane>
          <TabPane label="任务" name="name3"></TabPane>
        </Tabs>
      </Card>
    </Col>
  </Row>
</template>

<script>
import BusinessCard from "./personal/BusinessCard";
import Profile from "./personal/Profile";
export default {
  name: "PersonalInformation",
  components: {
    BusinessCard,
    Profile
  },
  data() {
    return {};
  },
  methods: {
    changeTab: function(name) {
      if (name === "businessCard") {
        this.$refs.businessCard.getList();
      }
    }
  }
};
</script>

<style scoped>
</style>
