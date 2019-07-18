<template>
  <Layout :style="{minHeight: '100vh'}">
    <Sider>
      <Menu theme="dark" width="auto" active-name="home">
        <MenuItem name="home" :to="{ path: '/home' }">主页</MenuItem>
        <MenuItem name="personalCenter" :to="{ path: '/personalCenter' }">个人中心</MenuItem>
        <MenuItem name="projectManagement" :to="{ path: '/projectManagement' }">项目管理</MenuItem>
      </Menu>
    </Sider>
    <Layout :style="{padding: '0 24px 24px'}">
      <Breadcrumb :style="{margin: '24px 0'}">
        <BreadcrumbItem :to="{ path: '/home' }">主页</BreadcrumbItem>
        <BreadcrumbItem v-text="this.$router.currentRoute.name">Components</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: "MangMangIndex",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
