<template>
  <Layout>
    <Header :style="{position: 'fixed', width: '100%',zIndex:'9999'}">
      <Menu mode="horizontal" theme="light" width="auto" :active-name="$route.name">
        <MenuItem name="主页" :to="{ path: '/home' }">主页</MenuItem>
        <MenuItem name="项目管理" :to="{ path: '/projectManagement' }">项目管理</MenuItem>
        <Submenu name="设置">
          <template slot="title">
            <Icon type="ios-stats" />个人设置
          </template>
          <MenuItem name="个人信息" :to="{ path: '/personalInformation' }">个人中心</MenuItem>
          <MenuItem name="个人设置" :to="{ path: '/personalSetting' }">个人设置</MenuItem>
          <!-- <MenuItem name="4"> 我的好友</MenuItem> -->
        </Submenu>
        <div :style="{float: 'right'}">
          <Dropdown @on-click="toPersonal">
            {{this.$store.getters.currentUser}}
            <a href="javascript:void(0)">
              <Avatar
                v-if="!this.$store.getters.userImage"
                icon="ios-person"
                size="large"
                src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              />
              <Avatar v-else icon="ios-person" size="large" :src="this.$store.getters.userImage" />
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="personal">个人中心</DropdownItem>
              <DropdownItem name="logout">退出</DropdownItem>
              <Modal title="注销登陆" v-model="logoutFlag" @on-ok="logout">
                <p>确定要注销登陆吗？</p>
              </Modal>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Menu>
    </Header>
    <Content class="content-body">
      <router-view></router-view>
    </Content>
    <!-- <Footer class="footer-center">2019 &copy; QZQ</Footer> -->
  </Layout>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      logoutFlag: false
    };
  },
  methods: {
    toPersonal(name) {
      if (name === "personal") {
        return this.$router.push({ path: "/personalInformation" });
      } else {
        this.logoutFlag = true;
      }
    },
    logout() {
      sessionStorage.setItem("userName", null);
      sessionStorage.setItem("userImage", null);
      sessionStorage.setItem("userId", null);
      this.$store.dispatch("setUser", null);
      this.$store.dispatch("setImage", null);
      this.$store.dispatch("setUserId", null);

      this.$router.replace({ path: "/" });
    }
  }
  // created: function() {
  //   console.log(this.$route);
  // }
};
</script>

<style scoped>
.content-body {
  padding: 16px 16px;
  /* min-height: 100%; */
  margin: 88px 20px 0;
  background-color: #fff;
}
.footer-center {
  text-align: center;
  background-color: #fff;
}
.ivu-layout-header {
  height: 60px;
  background-color: #fff;
}
</style>