<template>
  <div class="mang-mang-header">
    <h1>MangMang</h1>
    <Card style="width:400px;margin-left: auto;margin-right: auto;" dis-hover>
      <Form  :model="formInline" label-position="left" :label-width="50">
        <FormItem prop="user" label="账号">
          <Input type="text" v-model="formInline.phone" placeholder="手机号码">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" label="密码">
          <Input type="password" v-model="formInline.pass_word" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit()">登录</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import { loginAPW } from "../api/api";
export default {
  name: "LoginMangMang",
  data() {
    return {
      formInline: {
        phone: "",
        pass_word: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      loginAPW(this.formInline)
        .then(res => {
          var data = res.data;
          if (data.code === 0) {
            this.$Message.success(data.msg);
            this.$router.replace({path: '/home'});
          } else {
            this.$Message.error(data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.mang-mang-header {
  margin-top: 5%;
  text-align: center;
  font-size: 20px;
}
</style>
