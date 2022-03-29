<template>
  <div class="home">
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu background-color="#545c64" text-color="white" :router="true">
            <el-menu-item class="item" index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2" class="item">
              <template slot="title">
                <i class="el-icon-document-remove"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">文章列表</el-menu-item>
                <el-menu-item index="2-2">多级路由示例</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-button type="primary" class="addbtn" @click="addfn(1)">
            增加用户
          </el-button>
          <el-dialog
            :title="i === 1 ? '添加文章' : '编辑'"
            :visible.sync="dialogFormVisible"
          >
            <el-form :model="form">
              <el-form-item label="文章" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="作者" :label-width="formLabelWidth">
                <el-input v-model="form.text" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="fnsure">确 定</el-button>
            </div>
          </el-dialog>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      defaultactives: "/",
      form: {
        title: "text",
        name: "qwe",
      },
    };
  },
  computed: {
    defaultactive() {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    addfn(i) {
      // 添加业务
      this.i = i;
      console.log(i);
      this.form.name = "";
      this.form.text = "";
      this.dialogFormVisible = !this.dialogFormVisible;
    },
  },
};
</script>
<style scoped>
header {
  height: 10vh;
  background: #0079d9;
}
.el-row {
  width: 100%;
  height: 100%;
}
.el-row div {
  width: 100%;
  height: 100%;
}
aside {
  background: #545c64;
  height: 92.8vh;
  border: none;
}
main {
  height: 92.8vh;
  overflow: auto;
}
</style>
