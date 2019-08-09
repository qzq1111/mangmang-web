<template>
  <Row :gutter="48">
    <Col span="24">
      <h2>基本设置</h2>
    </Col>
    <Col span="12">
      <Form :model="formTop" label-position="top">
        <FormItem label="昵称">
          <Input v-model="formTop.input1"></Input>
        </FormItem>
        <FormItem label="邮箱">
          <Input v-model="formTop.input2"></Input>
        </FormItem>
        <FormItem label="个人介绍">
          <Input v-model="formTop.input3"></Input>
        </FormItem>
        <FormItem label="生日">
          <DatePicker type="date" placeholder="Select date" v-model="formTop.input4"></DatePicker>
        </FormItem>
        <FormItem label="居住地">
          <Input v-model="formTop.input5"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary">更新基本信息</Button>
        </FormItem>
      </Form>
    </Col>
    <Col span="12">
      <Form label-position="top">
        <FormItem label="头像">
          <Avatar
            icon="ios-person"
            src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
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
export default {
  name: "BasicInformation",
  data() {
    return {
      formTop: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
      }
    };
  }
};
</script>
<style scoped>
</style>


