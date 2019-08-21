<template>
  <div>
    <Row :gutter="16">
      <Col span="11">
        <Card dis-hover>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>项目描述
          </p>
        </Card>
      </Col>
      <Col span="11" offset="1">
        <Card dis-hover>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>项目成员
          </p>
        </Card>
      </Col>
    </Row>
    <br>
    <Row :gutter="16">
      <Col span="11">
        <Card dis-hover>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>问题概览
          </p>
          <Table></Table>
        </Card>
      </Col>
      <Col span="11" offset="1">
        <Card dis-hover>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>工时统计
          </p>
          <Table></Table>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "Overview",
  data() {
    return {};
  },
  created: function() {
    console.log(this.$route.params.key);
  }
};
</script>
<style scoped>
</style>