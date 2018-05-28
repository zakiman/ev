<template>
<el-row>
  <el-col :span="6">
    <div class="main">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="群" name="1">
          <p>群</p>
        </el-collapse-item>
        <el-collapse-item title="服务号" name="2">
          <service-number></service-number>
        </el-collapse-item>
        <el-collapse-item title="企业通讯录号" name="3">
          <p>企业通讯录</p>
        </el-collapse-item>
        <el-collapse-item title="集团总部" name="4">
          <p>前台
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </p>
          <p>中台
            <el-tree :data="data1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </p>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-col>
  <el-col :span="18"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
</template>

<script>
import serviceNumber from './components/serviceNumber'

export default {
  components: { serviceNumber },
  data() {
    return {
      activeName: '4',
      name: this.$route.name,
      data: [
        {
          label: '行政中心',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '财务中心',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '销售中心',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '地产中心',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      data1: [
        {
          label: '行政中心',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '财务中心',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '销售中心',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '地产中心',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>

<style>
.el-collapse-item__arrow.is-active {
  float: left;
}
.el-collapse-item__arrow {
  float: left;
}
p {
  margin: 0px;
  margin-left: 16px;
}
.el-button--primary:focus,
.el-button--primary {
  width: 100%;
}
.el-tabs--left .el-tabs__header.is-left {
  margin-right: 0px;
}
.el-tabs__content {
  height: 100%;
  background-color: #fff;
}
.el-collapse-item__arrow {
  color: #aaa;
}
.el-collapse-item__content {
  padding: 0;
  color: #bbb;
}
.el-icon-caret-right:before {
  content: '\E604';
  color: #000;
}
.el-collapse-item__header {
  padding-left: 10px;
  border-bottom: 0;
  font-size: 14px;
}
.el-collapse {
  border-right: 1px #ddd solid;
}
.el-icon-caret-right:before {
  color: #aaa;
}
.el-tree-node__label {
  color: #000;
}
.el-row,
.el-col-6,
.app_wrap .body .main,
.el-collapse {
  height: 100%;
}
</style>


