<template>
  <Card dis-hover>
    <div class="avatar-img">
      <Avatar
        icon="ios-person"
        :src="profile.avatar_url"
        :style="{width:'200px',height:'200px',borderRadius: '100px'}"
      />
      <h1>{{profile.name}}</h1>
      <p>{{profile.introduction}}</p>
    </div>
    <br />
    <p>
      <Icon type="ios-briefcase-outline" />
      {{profile.position}}
    </p>
    <br />
    <p>
      <Icon type="ios-pin-outline" />
      {{profile.address}}
    </p>
    <Divider />
    <p>标签</p>
    <Tag v-for="tag in tags" :key="tag">{{tag}}</Tag>
    <Button icon="ios-add" type="dashed" size="small">添加标签</Button>
  </Card>
</template>
<script>
import { userInfo } from "../../../api/api";
export default {
  name: "Profile",
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
      },
      tags: ["Python", "Vue", "Golang"]
    };
  },
  methods: {
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
    }
  },
  created: function() {
    this.getUserInfo();
  }
};
</script>
<style scoped>
.avatar-img {
  text-align: center;
}
</style>