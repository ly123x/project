<template>
<div class="dormitory">
    <!--搜索栏-->
    <div class="search-wrap">
        <el-row>
            <el-col :span="1" class="grid label-search">
                <el-span type="success" icon="el-icon-search">搜索：</el-span>
            </el-col>
            <el-col :span="6" class="grid">
                <el-input v-model="search" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="17">
                <div class="table-grid-content">
                    <el-button class="add" type="primary" @click="addRow()">新增</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
    <!--表格-->
    <el-table :data="tables" ref="tableData" style="width: 100%" :row-class-name="tableRowClassName" border>
        <el-table-column type="index" align="center" label="序号" width="180">
        </el-table-column>
        <el-table-column align="center" prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column align="center" prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column align="center" prop="address" label="地址">
        </el-table-column>
        <el-table-column label="操作" align="center">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- 新增窗口 -->
    <el-dialog title="新增" :visible.sync="addFormVisible">
        <el-form :model="addForm" ref="addForm">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="addForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="日期" :label-width="formLabelWidth">
                <el-date-picker v-model="addForm.date" type="date" placeholder="选择日期" format="MM 月 dd 日" value-format="MM-dd">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="addForm.address" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div>
            <el-button @click="cancel()">取消</el-button>
            <el-button type="primary" @click="sumbitAddRow()" :loading="addLoading">确定</el-button>
        </div>

    </el-dialog>
    <!-- 编辑窗口 -->
    <el-dialog title="编辑" :visible.sync="editFormVisible">
        <el-form :model="editForm" ref="editForm">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="editForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="生日" :label-width="formLabelWidth">
                <el-date-picker v-model="editForm.date" type="date" placeholder="选择日期" format="MM 月 dd 日" value-format="MM-dd">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="editForm.address" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div>
            <el-button @click="cancel()">取消</el-button>
            <el-button type="primary" v-on:click="sumbitEditRow()" :loading="addLoading">确定</el-button>
        </div>

    </el-dialog>
</div>
</template>

<style>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
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

.el-col-6 {
    width: 25%;
    margin-left: -182px;
}
</style>

<script>
var _index; //定义全局变量
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎1',
                address: '上海市普陀区金沙江路 1518 ',
            }, {
                date: '2016-05-04',
                name: '王小虎2',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎3',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎4',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            formLabelWidth: '120px',
            addFormVisible: false, //是否显示新增窗口
            name: "tableList",
            addForm: [],
            addLoading: false,
            editFormVisible: false, //是否显示编辑窗口
            editForm: [],
            search: '',
        }
    },
    computed: {
        // 模糊搜索
        tables() {
            const search = this.search
            if (search) {
                // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
                // 注意： filter() 不会对空数组进行检测。
                // 注意： filter() 不会改变原始数组。
                return this.tableData.filter(data => {
                    // some() 方法用于检测数组中的元素是否满足指定条件;
                    // some() 方法会依次执行数组的每个元素：
                    // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
                    // 如果没有满足条件的元素，则返回false。
                    // 注意： some() 不会对空数组进行检测。
                    // 注意： some() 不会改变原始数组。
                    return Object.keys(data).some(key => {
                        // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
                        // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
                        return String(data[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.tableData
        }
    },
    methods: {
        tableRowClassName: function ({
            row,
            rowIndex
        }) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        },
        handleEdit: function (index, row) {
            console.log(index, row);
        },
        /*表格删除功能*/
        handleDelete: function (index, row) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.tableData.splice(index, 1)
                this.$message({
                    type: 'success',
                    message: '删除成功!',
                })
            }).catch(err => {
                this.$message({
                    type: 'error',
                    message: err
                })
            })
        },
        //新增数据
        addRow: function () {
            this.addFormVisible = true;
            this.addForm = {
                name: '',
                date: '',
                address: ''
            }
        },
        //将新增的数据添加到表格中
        sumbitAddRow: function () {
            this.tableData = this.tableData || []
            this.tableData.push({
                name: this.addForm.name,
                date: this.addForm.date,
                address: this.addForm.address,
            })
            this.addFormVisible = false
        },
        cancel: function () {
            this.addFormVisible = false;
            this.editFormVisible = false;
        },
        //编辑数据
        handleEdit(index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
            _index = index;
        },
        //保存编辑
        sumbitEditRow() {
            var editData = _index;
            this.tableData[editData].name = this.editForm.name;
            this.tableData[editData].date = this.editForm.date;
            this.tableData[editData].address = this.editForm.address;
            this.editFormVisible = false;
        },
    }
}
</script>
