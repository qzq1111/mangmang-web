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
          <Modal v-model="projectModal" title="添加项目" @on-ok="addProject">
            <Form :model="project" :label-width="80">
              <FormItem label="项目名称：">
                <Input v-model="project.name" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem label="项目描述">
                <Input v-model="project.comment" placeholder="Enter something..."></Input>
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
            <p>{{item.comment}}</p>
          </div>
          <div class="body-footer">
            <Button type="text">修改</Button>
            <Button type="text" v-on:click="onClickMe({id:item.id,name:item.name})">查看</Button>
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
        comment: ""
      },
      projects: [
        {
          id: "13321",
          name: "项目1",
          comment: "这是测试描述"
        },
        {
          id: "1325321",
          name: "项目1",
          comment: "这是测试描述"
        }
      ],
      projectModal: false
    };
  },
  methods: {
    onClickMe: function(data) {
      this.$emit("child-say", data);
    },
    addProject: function() {
      if (this.project.name === "") {
        return;
      } else {
        this.projects.push({
          id: Math.random() * 50,
          name: this.project.name,
          commet: this.project.comment
        });
      }
    }
  }
};
</script>

<style scoped>
.body-footer {
  text-align: right;
}
</style>
