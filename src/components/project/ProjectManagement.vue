<template>
  <div>
    <Row>
      <Col span="6">
        <Input
          search
          enter-button="搜索项目"
          placeholder="Enter something..."
          :style="{width:'300px'}"
        />
      </Col>
      <Col>
        <div>
          <Button type="primary" @click="projectModal = true">添加项目</Button>
          <Modal v-model="projectModal" title="修改个人信息">
            <Form :model="project" :label-width="80">
              <FormItem label="项目名称：">
                <Input v-model="project.name" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem label="项目描述">
                <Input v-model="project.commet" placeholder="Enter something..."></Input>
              </FormItem>
            </Form>
          </Modal>
        </div>
      </Col>
    </Row>
    <br />
    <Row :gutter="16">
      <Col span="6" v-for="item in projects" v-bind:key="item.id" :style="{paddingBottom: '8px'}">
        <Card>
          <div class="body-content">
            <h1>{{item.name}}</h1>
            <p>{{item.commet}}</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </div>
          <div class="body-footer">
            <Button type="text">修改</Button>
            <Button type="text" :to="'/projectManagement/'+item.id">查看</Button>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "ProjectManagement",
  data() {
    return {
      project: {
        name: "",
        commet: ""
      },
      projects: [
        {
          id: "13321",
          name: "项目1",
          commet: "这是测试描述"
        },
        {
          id: "1325321",
          name: "项目1",
          commet: "这是测试描述"
        },
        {
          id: "41321",
          name: "项目1",
          commet: "这是测试描述"
        },
        {
          id: "4324213",
          name: "项目1",
          commet: "这是测试描述"
        },
        {
          id: "432423",
          name: "项目1",
          commet: "这是测试描述"
        },
        {
          id: "343324",
          name: "项目1",
          commet: "这是测试描述"
        },
      ],
      projectModal: false
    };
  }
};
</script>

<style scoped>
.body-footer {
  text-align: right;
}
</style>
