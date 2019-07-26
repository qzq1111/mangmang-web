<template>
  <div>
    <div class="avatar-img">
      <img :src="profile.avatar_url" />
    </div>
    <div class="user-info">
      <h1>{{profile.name}}</h1>
      <br />
      <div class="user-item">
        <h2>邮箱：</h2>
        <p>{{profile.email}}</p>
      </div>
      <div class="user-item">
        <h2>生日：</h2>
        <p>{{profile.birthday}}</p>
      </div>
      <div class="user-item">
        <h2>性别：</h2>
        <p v-if="profile.sex ==0">未知</p>
        <p v-else-if="profile.sex ==1">男</p>
        <p v-else>女</p>
      </div>
      <div class="user-item">
        <h2>地址：</h2>
        <p>{{profile.address}}</p>
      </div>
      <div class="user-item">
        <h2>电话：</h2>
        <p>{{profile.phone }}</p>
      </div>
    </div>
    <div>
      <Button type="primary" @click="modal1 = true">修改个人信息</Button>
      <Modal v-model="modal1" title="修改个人信息">
        <Form :model="profile" :label-width="80">
          <FormItem label="邮箱：">
            <Input v-model="profile.email" placeholder="Enter something..."></Input>
          </FormItem>
           <FormItem label="生日：">
            <Input v-model="profile.birthday" placeholder="Enter something..."></Input>
          </FormItem>
           <FormItem label="性别：">
            <Input v-model="profile.sex" placeholder="Enter something..."></Input>
          </FormItem>
           <FormItem label="地址：">
            <Input v-model="profile.address" placeholder="Enter something..."></Input>
          </FormItem>
           <FormItem label="电话：">
            <Input v-model="profile.phone" placeholder="Enter something..."></Input>
          </FormItem>
        </Form>
      </Modal>
    </div>
  </div>
</template>

<script>
import { userInfo } from "../../api/api";
export default {
  name: "PersonalInformation",
  data() {
    return {
      profile: {
        address: "",
        avatar_url: "",
        birthday: "",
        email: "",
        name: "",
        phone: "",
        sex: 0,
        user_id: ""
      },
      modal1: false,
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
    getProjectInfo: function() {}
  }
  // created: function() {
  //   this.getUserInfo();
  // }
};
</script>

<style scoped>
.avatar-img {
  text-align: center;
  width: 200px;
  height: 200px;
}
.avatar-img img {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: auto;
}
.user-info {
  width: 450px;
}
.user-item h2,
p {
  display: inline;
}
</style>
