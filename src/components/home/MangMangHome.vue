<template>
  <div class="home-container">
    <Row :gutter="16">
      <Col span="6">
        <Card>
          <p slot="title">任务概览</p>
          <p>Content of card</p>
          <p>Content of card</p>
          <p>Content of card</p>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <p slot="title">项目进度</p>
          <p>Content of card</p>
          <p>Content of card</p>
          <p>Content of card</p>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <p slot="title">未读消息</p>
          <p>Content of card</p>
          <p>Content of card</p>
          <p>Content of card</p>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <p slot="title">未读消息</p>
          <p>Content of card</p>
          <p>Content of card</p>
          <p>Content of card</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "MangMangHome"
};
</script>

<style scoped>
.home-container {
  height: 100%;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 0 10px;
}
</style>
