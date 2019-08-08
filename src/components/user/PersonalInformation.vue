<template>
  <Row :gutter="16">
    <Col span="7">
      <Card dis-hover>
        <div class="avatar-img">
          <Avatar
            icon="ios-person"
            src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
            :style="{width:'200px',height:'200px',borderRadius: '100px'}"
          />
          <h1>{{name}}</h1>
          <p>{{comment}}</p>
        </div>
        <br/>
        <p><Icon type="ios-briefcase-outline" />  {{job}}</p>
        <br/>
        <p><Icon type="ios-pin-outline" />{{address}}</p>
        <Divider />
        <p>标签</p>
        <Tag v-for="tag in tags" :key="tag">{{tag}}</Tag>
        <Button icon="ios-add" type="dashed" size="small">添加标签</Button>
      </Card>
    </Col>
    <Col span="17">
      <Card dis-hover>
        <Tabs value="name1">
          <TabPane label="名片" name="name1">
            <business-card></business-card>
          </TabPane>
          <TabPane label="项目" name="name2"></TabPane>
          <TabPane label="任务" name="name3"></TabPane>
        </Tabs>
      </Card>
    </Col>
  </Row>
</template>

<script>
import { userInfo } from "../../api/api";
import BusinessCard from "./personal/BusinessCard";
export default {
  name: "PersonalInformation",
  components: {
    BusinessCard
  },
  data() {
    return {
      name: "那些年踩过的坑",
      job:"全栈工程师",
      address: "四川成都",
      comment:"踩那些你不敢踩的坑",
      tags:["Python","Golang","后端","Liunx"]
    };
  },
  methods: {
    getUserInfo: function() {
      userInfo({ key: "2bca066a-2446-4b1d-b24c-0ed6e0dad162" })
        .then(res => {
          var data = res.data;
          if (data.code == 0) {
            this.profile = data.data;
          } else {
          }
        })
        .catch(err => {});
    },
  }
};
</script>

<style scoped>
.avatar-img {
  text-align: center;
}
</style>
