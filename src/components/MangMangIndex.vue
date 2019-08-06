<template>
  <Layout :style="{minHeight: '100vh'}">
    <Sider>
      <Menu theme="dark" width="auto" :active-name="this.$router.currentRoute.name">
        <MenuItem name="主页" :to="{ path: '/home' }">主页</MenuItem>
        <MenuItem name="项目管理" :to="{ path: '/projectManagement' }">项目管理</MenuItem>
        <MenuGroup title="个人中心">
          <MenuItem name="个人信息" :to="{ path: '/personalInformation' }">个人信息</MenuItem>
          <MenuItem name="个人名片" :to="{ path: '/businessCard' }">个人名片</MenuItem>
          <!-- <MenuItem name="4"> 我的好友</MenuItem> -->
        </MenuGroup>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <div :style="{float: 'right'}">
          <Dropdown>
            <a href="javascript:void(0)">
              <Avatar icon="ios-person" size="large" />
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>个人信息</DropdownItem>
              <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>

      <Content :style="{padding: '0 16px 16px', minHeight: '280px'}">
        <Breadcrumb :style="{margin: '24px 0'}">
          <BreadcrumbItem :to="{ path: '/home' }">主页</BreadcrumbItem>
          <BreadcrumbItem v-text="this.$router.currentRoute.name">Components</BreadcrumbItem>
        </Breadcrumb>
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
  },
  methods: {
  },
  created: function() {
    // `this` 指向 vm 实例
    console.log(this.$router.options);
  }
};
</script>

<style scoped>
</style>
