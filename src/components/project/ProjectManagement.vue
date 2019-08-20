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
       <Col span="6"v-if="projects.length === 0">
        <h2>啥也没有，添加点什么吧！</h2>
      </Col>
      <Col span="6" v-else v-for="item in projects" v-bind:key="item.id" :style="{paddingBottom: '8px'}">
        <Card>
          <div class="body-content">
            <h1>{{item.project_name}}</h1>
            <p>{{item.project_content}}</p>
            <p>{{item.create_time}}</p>
          </div>
          <div class="body-footer">
            <Button type="text">修改</Button>
            <Button type="text" v-on:click="onOpenTask(item.project_id)">查看</Button>
          </div>
        </Card>
      </Col>
     
    </Row>
  </div>
</template>

<script>
import { getProjectList } from "../../api/api";
export default {
  name: "ProjectManagement",
  data() {
    return {
      project: {
        project_name: "",
        project_content: ""
      },
      projects: [],
      projectModal: false
    };
  },
  methods: {
    onOpenTask: function(data) {
      this.$router.push({path:`/projectManagement/${data}`})
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
    },
    getProjects: function() {
      getProjectList({ user_id: this.$store.getters.userId })
        .then(res => {
          var data = res.data;
          if (data.code === 0) {
            this.projects = data.data.projects;
          } else {
            this.$Message.err(data.msg);
          }
        })
        .catch(err => {});
    }
  },
  created: function() {
    this.getProjects();
  }
};
</script>

<style scoped>
.body-footer {
  text-align: right;
}
</style>
