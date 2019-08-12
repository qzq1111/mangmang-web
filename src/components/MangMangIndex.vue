<template>
  <Layout :style="{minHeight: '100vh'}">
    <Sider>
      <Menu theme="dark" width="auto" :active-name="$route.name">
        <MenuItem name="主页" :to="{ path: '/home' }">主页</MenuItem>
        <MenuItem name="项目管理" :to="{ path: '/projectManagement' }">项目管理</MenuItem>
        <MenuGroup title="设置">
          <MenuItem name="个人信息" :to="{ path: '/personalInformation' }">个人中心</MenuItem>
          <MenuItem name="个人设置" :to="{ path: '/personalSetting' }">个人设置</MenuItem>
          <!-- <MenuItem name="4"> 我的好友</MenuItem> -->
        </MenuGroup>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <div :style="{float: 'right'}">
          欢迎你{{currentUser}}
          <Dropdown @on-click="toPersonal">
            <a href="javascript:void(0)">
              <Avatar
                v-if="!userImage"
                icon="ios-person"
                size="large"
                src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              />
              <Avatar v-else icon="ios-person" size="large" :src="userImage" />
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="测试">个人中心</DropdownItem>
              <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>

      <Content :style="{padding: '16px 16px', minHeight: '280px'}">
        <!-- <Breadcrumb :style="{margin: '24px 0'}">
          <BreadcrumbItem :to="{ path: '/home' }">主页</BreadcrumbItem>
          <BreadcrumbItem v-text="$route.name">Components</BreadcrumbItem>
        </Breadcrumb>-->
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
    toPersonal() {
      return this.$router.push({ path: "/personalInformation" });
    }
  },
  created: function() {
    console.log(this.$route);
  },
  computed: {
    //获取当前用户名
    currentUser() {
      
      return this.$store.getters.currentUser;
    },
    //获取当前用户的头像
    userImage() {
      if (
        sessionStorage.getItem("userImage") === null ||
        sessionStorage.getItem("userImage") === ""
      ) {
        this.$store.commit("userImageGet", null);
      } else {
        this.$store.commit("userImageGet", sessionStorage.getItem("userImage"));
      }
      console.log(this.$store.getters.userImage);
      return this.$store.getters.userImage;
    }
  }
};
</script>

<style scoped>
.ivu-layout {
  background: #ffffff;
}
</style>
