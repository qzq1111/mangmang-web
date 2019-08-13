<template>
  <Row :gutter="48">
    <Col span="24">
      <h2>基本设置</h2>
    </Col>
    <Col span="12">
      <Form :model="profile" label-position="top">
        <FormItem label="昵称">
          <Input v-model="profile.name"></Input>
        </FormItem>
        <FormItem label="邮箱">
          <Input v-model="profile.email"></Input>
        </FormItem>
        <FormItem label="个性签名">
          <Input v-model="profile.introduction"></Input>
        </FormItem>
        <FormItem label="职位">
          <Input v-model="profile.position"></Input>
        </FormItem>
        <FormItem label="生日">
          <DatePicker type="date" placeholder="Select date" v-model="profile.birthday"></DatePicker>
        </FormItem>
        <FormItem label="居住地">
          <Input v-model="profile.address"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="putUserInfo">更新基本信息</Button>
        </FormItem>
      </Form>
    </Col>
    <Col span="12">
      <Form label-position="top">
        <FormItem label="头像">
          <Avatar
            icon="ios-person"
            :src="profile.avatar_url"
            :style="{width:'100px',height:'100px',borderRadius: '50px'}"
          />
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            :style="{paddingLeft: '15px',paddingTop: '15px'}"
          >
            <Button>修改头像</Button>
          </Upload>
        </FormItem>
      </Form>
    </Col>
  </Row>
</template>
<script>
import { userInfo, changeUserInfo } from "../../../api/api";
export default {
  name: "BasicInformation",
  data() {
    return {
      profile: {
        position: "",
        introduction: "",
        address: "",
        avatar_url: "",
        birthday: "",
        email: "",
        name: "",
        phone: "",
        sex: "",
        user_id: ""
      }
    };
  },
  methods: {
    dateFtt: function(fmt, date) {
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    },
    getUserInfo: function() {
      userInfo({ key: this.$store.getters.userId })
        .then(res => {
          var data = res.data;
          if (data.code == 0) {
            this.profile = data.data;
          } else {
          }
        })
        .catch(err => {});
    },
    putUserInfo: function() {
      changeUserInfo({
        user_id: this.profile.user_id,
        name: this.profile.name,
        email: this.profile.email,
        sex: this.profile.sex,
        birthday: this.dateFtt("yyyy-MM-dd", new Date(this.profile.birthday)),
        address: this.profile.address,
        position: this.profile.position,
        introduction: this.profile.introduction
      })
        .then(res => {
          var data = res.data;
          console.log(data);
          if (data.code === 0) {
            this.$Message.success(data.msg);
            this.getUserInfo();
          } else {
            this.$Message.error(data.msg);
            this.getUserInfo();
          }
        })
        .catch(err => {
          this.getUserInfo();
        });
    }
  },
  created: function() {
    this.getUserInfo();
  }
};
</script>
<style scoped>
</style>


