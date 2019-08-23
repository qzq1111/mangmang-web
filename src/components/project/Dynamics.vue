<template>
<div>
  <Card
    dis-hover
    v-for="(item, index) in list1"
    :key="index"
  >Content {{ item }}</Card>
</div>
</template>
<script>
export default {
  name: "Dynamics",

  data() {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>