
<template>
  <div>
    <Row>
      <Col span="8">
        <Input search enter-button="搜索名片" placeholder="输入名片名称" :style="{width:'300px'}" />
      </Col>
      <Col span="16">
        <Button type="primary">添加名片</Button>
      </Col>
    </Row>
    <br />
    <Row :gutter="16">
      <Col
        span="12"
        v-for="card in businessCardList"
        :key="card.id"
        :style="{marginBottom: '16px!important'}"
      >
        <Card>
          <h1>{{card.name}}</h1>
          <p>公司：{{card.company}}</p>
          <p>职位：{{card.position}}</p>
          <p>电话号码：{{card.phone}}</p>
          <p>QQ：{{card.qq}}</p>
          <p>微信：{{card.wx}}</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import { getBusinessCardList } from "../../../api/api";
export default {
  name: "BusinessCard",
  data() {
    return {
      businessCardList: []
    };
  },
  methods: {
    getList: function() {
      getBusinessCardList({ key: "", user_id: this.$store.getters.userId })
        .then(res => {
          var data = res.data;
          if (data.code === 0) {
            this.businessCardList = data.data.business_card;
          } else {
            this.businessCardList = [];
          }
        })
        .catch(err => {});
    }
  },
  created: function() {
    this.getList();
  }
};
</script>

<style scoped>
</style>

