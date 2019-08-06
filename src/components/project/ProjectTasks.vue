<template>
  <div>
    <Row>
      <Col span="6">
        <Input
          search
          enter-button="搜索任务"
          placeholder="Enter something..."
          :style="{width:'300px'}"
        />
      </Col>
      <Col>
        <div>
          <Button type="primary" @click="taskModal = true">添加任务</Button>
          <Modal v-model="taskModal" title="修改个人信息">
            <Form :model="task" :label-width="80">
              <FormItem label="任务名称：">
                <Input v-model="task.name" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem label="任务描述">
                <Input v-model="task.commet" placeholder="Enter something..."></Input>
              </FormItem>
            </Form>
          </Modal>
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
export default {
  name: "ProjectTasks",
  data() {
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
      ]
    };
  }
};
</script>

<style scoped>
</style>
