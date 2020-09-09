<template>
  <div class="dormitory">
    <Iheader></Iheader>
    <sidebar></sidebar>
    <div class="top">
      <img src="../assets/img/s4.png" />
      <img src="../assets/img/s5.png" />
      <div class="fen">
        缴费查询
      </div>
    </div>
    <!--搜索栏-->
    <div class="search-wrap">
      <el-row>
        <el-col :span="1" class="grid label-search">
          <el-span type="success" icon="el-icon-search"></el-span>
        </el-col>
        <el-col :span="6" class="grid">
          <el-input v-model="search" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="17">
          <div class="table-grid-content">
            <el-button class="add" type="primary" @click="addRow()"
              >新增</el-button
            >
          </div>
        </el-col>
      </el-row>
    </div>
    <!--表格-->
    <div class="from">
      <el-table
        :data="item"
        ref="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        border
      >
        <el-table-column prop="id" align="center" label="序号" width="140">
        </el-table-column>
        <el-table-column
          align="center"
          prop="courseDesc"
          label="用户名"
          width="140"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="courseName"
          label="用户角色"
          width="140"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="professional.professionalDesc"
          label="用户姓名"
          width="140"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="professional.professionalName"
          label="联系电话"
          width="140"
        >
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 新增窗口 -->
      <el-dialog title="新增" :visible.sync="addFormVisible">
        <el-form :model="tableData" ref="tableData">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input
              v-model="tableData.courseDesc"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户角色" :label-width="formLabelWidth">
            <el-input
              v-model="tableData.courseName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户姓名" :label-width="formLabelWidth">
            <el-input
              v-model="tableData.professional.professionalDesc"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input
              v-model="tableData.professional.professionalName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button @click="cancel()">取消</el-button>
          <el-button
            type="primary"
            @click="sumbitAddRow()"
            :loading="addLoading"
            >确定</el-button
          >
        </div>
      </el-dialog>
      <!-- 编辑窗口 -->
      <el-dialog title="编辑" :visible.sync="editFormVisible">
        <el-form :model="tableData" ref="tableData">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input
              v-model="tableData.courseName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户角色" :label-width="formLabelWidth">
            <el-input
              v-model="tableData.courseDesc"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户姓名" :label-width="formLabelWidth">
            <el-input
              v-model="tableData.professional.professionalName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input
              v-model="tableData.professional.professionalDesc"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button @click="cancel()">取消</el-button>
          <el-button
            type="primary"
            v-on:click="sumbitEditRow()"
            :loading="addLoading"
            >确定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Iheader from "../components/IHeader";
import sidebar from "../components/sidebar";
import qs from "qs";
var _index; //定义全局变量
export default {
  components: {
    Iheader,
    sidebar,
  },
  data() {
    return {
      tableData: {
        courseDesc: "",
        courseName: "",
        professional: {
          professionalDesc: "",
          professionalName: "",
        },
      },
      formLabelWidth: "120px",
      addFormVisible: false, //是否显示新增窗口
      name: "tableList",
      addForm: [],
      addLoading: false,
      editFormVisible: false, //是否显示编辑窗口
      editForm: [],
      search: "",
      item: [],
    };
  },
  created: function() {
    this.$axios
      .get("http://139.9.169.87:8081/examsystem/getAllCourse")
      .then((res) => {
        let that = this;
        that.item = res.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  computed: {
    // 模糊搜索
    tables() {
      const search = this.search;
      if (search) {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测。
        // 注意： filter() 不会改变原始数组。
        return this.tableData.filter((data) => {
          // some() 方法用于检测数组中的元素是否满足指定条件;
          // some() 方法会依次执行数组的每个元素：
          // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
          // 如果没有满足条件的元素，则返回false。
          // 注意： some() 不会对空数组进行检测。
          // 注意： some() 不会改变原始数组。
          return Object.keys(data).some((key) => {
            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.tableData;
    },
  },
  methods: {
    tableRowClassName: function({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleEdit: function(index, row) {
      console.log(index, row);
    },
    /*表格删除功能*/
    handleDelete: function(index, row) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .post(
              "http://139.9.169.87:8081/examsystem/deleteCourse?id=" + row.id
            )
            .then((res) => {
              console.log(res.data);
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch((err) => {
          this.$message({
            type: "error",
            message: err,
          });
        });
    },
    //新增数据
    addRow: function() {
      this.addFormVisible = true;
    },
    //将新增的数据添加到表格中
    sumbitAddRow: function() {
      let dates = qs.stringify({
        courseDesc: this.tableData.courseDesc,
        courseName: this.tableData.courseName,
        "professional.professionalName": this.tableData.professional
          .professionalName,
        "professional.professionalDesc": this.tableData.professional
          .professionalDesc,
        professionalId: 160,
      });

      this.$axios
        .post("http://139.9.169.87:8081/examsystem/addCourse", dates, {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.addFormVisible = false;
    },
    cancel: function() {
      this.addFormVisible = false;
      this.editFormVisible = false;
    },
    //编辑数据
    handleEdit(index, row) {
      this.editFormVisible = true; 
      _index = index;
      this.tableData = row;
    },
    //保存编辑
    sumbitEditRow() {
      let dates = qs.stringify({
        id: this.tableData.id,
        courseDesc: this.tableData.courseDesc,
        courseName: this.tableData.courseName,
        "professional.professionalName": this.tableData.professional
          .professionalName,
        "professional.professionalDesc": this.tableData.professional
          .professionalDesc,
        professionalId: 160,
      });
      this.$axios
        .post("http://139.9.169.87:8081/examsystem/updateCourse", dates,)
        .then((res) => {
          console.log(res.data)
        })
        .catch(function(error) {
          console.log(error);
        });  
      this.editFormVisible = false;
    },
  },
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.top img:last-of-type {
  margin-top: 22px;
  left: 241px;
  position: absolute;
}

.el-table .success-row {
  background: #f0f9eb;
}

.top img:first-of-type {
  width: 77%;
  margin-top: 22px;
}

.el-col-17 {
  width: 70.8333333333%;
  margin-left: 127px;
  margin-top: -40px;
}

.el-col-1 {
  width: 4.1666666667%;
  margin-left: 574px;
}

.top {
  position: relative;
}

.fen {
  position: absolute;
  left: 255px;
  top: 28px;
  color: white;
}

.add {
  float: right;
}

.search-wrap {
  margin: 10px 40px;
}

.label-search {
  margin-top: 7px;
}

.from {
  width: 80%;
  margin-left: 230px;
  margin-top: -1211px;
}

.el-row {
  position: relative;
  box-sizing: border-box;
  margin-left: 419px;
}
</style>
