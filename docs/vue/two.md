
# 阅读升级
<template>
  <el-card class="box-card el-card-box" shadow="hover" v-for="(item, index) in list" :key="index"  >
    <div slot="header" class="clearfix">
      <span @click="goArticleDetail(item.href)">{{item.title}}</span>
      <el-button style="float: right; padding: 3px 0" type="text">
      <el-rate v-model="item.rate" show-score text-color="#ff9900" disabled
      :colors="['#99A9BF', '#F7BA2A', '#F56C6C']"    class="el-rate-box"  ></el-rate>
      <el-tag size="small" type="success">{{item.type | typeFilter}}</el-tag>
      </el-button>
    </div>
    <div  class="text item" style="color:#909399">{{item.subTitle}}</div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list :[
        {
          title:'20几岁怎么做，可以在5年后更加富有？',
          subTitle:'123123123131313',
          href:'https://mp.weixin.qq.com/s/qvc4aFf-sSQFTNxJ-j0Etg',
          rate:4,
          type:1
        },
        {
          title:"如何做艰难的决定？",
          subTitle:"123123213213",
          href:'https://mp.weixin.qq.com/s/KDj806glTi47xxMj13ZLJw',          
          rate:3.8,
          type:2
        }
      ]
    }
  },
  methods: {
    goArticleDetail(href) {
      window.open(href);
    }
  },
  filters: {
    typeFilter(val){
      if(!val) return
      let typeName = {
        '1':'干货满满',
        '2':'职场方向',
        '3':'人生旅途',        
      }
      return typeName[val]
    }
  }
}
</script>
<style>
.el-card-box{
  cursor: pointer;
  margin-bottom: 10px;
}
.el-rate-box{
  display: inline;
  margin-right: 10px;
}
</style>
