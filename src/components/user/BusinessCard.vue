
<template>
  <div>
  <Row>
    <Col span="6">
      <Input search enter-button="搜索名片" placeholder="Enter something..."  :style="{width:'300px'}" />
    </Col>
    <Col>
      <Button type="primary">添加名片</Button>
    </Col>
  </Row>
  <br>
  <Row :gutter="16">
    <Col span="6">
      <Card>
        <h1>名片1</h1>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
    </Col>
    <Col span="6">
      <Card>
        <h1>名片2</h1>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
    </Col>
    <Col span="6">
      <Card>
        <h1>名片3</h1>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
    </Col>
    <Col span="6">
      <Card>
        <h1>名片4</h1>
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
  name: "BusinessCard"
};
</script>

<style scoped>
</style>

