<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="文章标题" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="作者" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="浏览量" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.nums }}</span>
      </template>
    </el-table-column>
    <el-table-column label="回复" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.num }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="dele(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import instance from "../../api/index";
export default {
  name: "home2",
  data() {
    return {
      tableData: null,
    };
  },
  methods: {
    async getdata() {
      let { data } = await instance.get("/login");
      console.log(data);
      this.tableData = data;
    },
    async dele(a, b) {
      console.log(a, b);
      let { data } = await instance.delete("/dele/" + a);
      console.log(data);
      this.tableData = data;
    },
  },
  created() {
    this.getdata();
  },
};
</script>
<style scoped>
table {
  width: 100%;
}
td {
  text-align: center;
}
</style>