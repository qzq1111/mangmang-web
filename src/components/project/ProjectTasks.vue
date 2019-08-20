<template>
  <div>
    <Row>
      <router-link :to="{path:'/projectManagement'}">返回</router-link>
    </Row>
    <Row>
      <Col span="6">
        <h1>项目任务概览</h1>
        <v-chart :options="polar" :init-options="initOptions" />
      </Col>
      <Col span="6">
        <h1>项目进度概览</h1>
      </Col>
      <Col span="6">
        <h1>项目成员</h1>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col span="6">
        <Input search enter-button="搜索任务" placeholder="Enter something..." />
      </Col>
      <Col>
        <div>
          <Button type="primary" @click="taskModal = true">添加任务</Button>
          <Modal v-model="taskModal" title="添加任务">
            <Form :model="task" :label-width="80">
              <FormItem label="任务名称：">
                <Input v-model="task.name" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem label="任务描述">
                <Input v-model="task.commet" placeholder="Enter something..."></Input>
              </FormItem>
            </Form>
          </Modal>
          <Button type="dashed">指定我的</Button>
          <Button type="dashed">未关闭的</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed">Dashed</Button>
        </div>
      </Col>
    </Row>
    <br />
    <Row :gutter="16">
      <Table :columns="columns1" :data="data1"></Table>
    </Row>
  </div>
</template>
<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";

export default {
  name: "ProjectTasks",
  components: {
    "v-chart": ECharts
  },

  data() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }

    return {
      taskModal: false,
      task: {
        name: "",
        comment: ""
      },
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      initOptions: {
        width: 200,
        height: 250
      },
      polar: {
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    };
  }
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
