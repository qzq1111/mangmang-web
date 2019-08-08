<template>
  <div>
    <Row :gutter="16">
      <Col span="6">
        <Card dis-hover :padding="0">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>个人设置
          </p>
          <CellGroup @on-click="changeSetting">
            <Cell title="基本设置" label="个人账户信息设置" name="BasicInformation" :selected="basicInformationflag" />
            <Cell title="安全设置" label="密码、邮箱设置" name="SecuritySettings" :selected="securitySettingsFlag" />
            <!-- <Cell title="账号绑定" label="绑定第三方应用" name="AccountBind" :selected="accountBindFlag" /> -->
          </CellGroup>
        </Card>
      </Col>
      <Col span="18">
        <Card  dis-hover >
          <component v-bind:is="setting"></component>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import AccountBind from "./setting/AccountBind";
import BasicInformation from "./setting/BasicInformation";
import SecuritySettings from "./setting/SecuritySettings";
export default {
  name: "PersonalSetting",
  components: {
    AccountBind,
    BasicInformation,
    SecuritySettings
  },
  data() {
    return {
      setting: BasicInformation,
      basicInformationflag: true,
      accountBindFlag: false,
      securitySettingsFlag: false
    };
  },
  methods: {
    changeSetting: function(name) {
      this.setting = name;
      switch (name) {
        case AccountBind.name:
          this.basicInformationflag = false;
          this.securitySettingsFlag = false;
          this.accountBindFlag = true;
          break;
        case BasicInformation.name:
          this.basicInformationflag = true;
          this.securitySettingsFlag = false;
          this.accountBindFlag = false;
          break;
        case SecuritySettings.name:
          this.basicInformationflag = false;
          this.securitySettingsFlag = true;
          this.accountBindFlag = false;
          break;
        default:
          this.basicInformationflag = true;
          this.securitySettingsFlag = false;
          this.accountBindFlag = false;
      }
    }
  }
};
</script>
<style scoped>
</style>
