<template>
  <div style="margin:0 auto;">
    <van-row>
      <van-search v-model="queryContent" shape="round" placeholder="请输入搜索关键词" />
    </van-row>
    <div class="card">
      <van-row style="border-bottom: 1px solid #DCDCDC;" type="flex" justify="left"><span class="title">每日一文</span></van-row>
      <van-row type="flex" justify="center"><span style="margin: 10px 10px 10px;color: #A9A9A9;font-size: 14px">2020/07/08</span></van-row>
      <van-row type="flex" justify="center">
        <van-image fit="cover" height="240" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </van-row>
      <div style="margin: 0px 16px 0px 16px">
        <van-row type="flex" justify="center"><span style="margin: 10px 10px 10px;color: #A9A9A9;font-size: 14px">《出小镇记》</span></van-row>
        <van-row style="border-bottom: 1px solid #ebedf0;" type="flex" justify="left"><span style="margin-bottom: 15px;color: #808080;font-size: 12px;text-indent:2em;">一个人要领悟到生活的浪漫，多少得有些演员的特质，此外还要有跳出自身角色的本事，必然能以局外人的眼光。</span></van-row>
        <div class="van-list__finished-text">查看更多</div>
      </div>
    </div>
    <div class="card">
      <van-row style="border-bottom: 1px solid #DCDCDC;" type="flex" justify="left"><span class="title">最多浏览</span></van-row>
      <van-list v-model="loading" :finished="finished">
        <van-cell v-for="item in list" :key="item" :title="'《'+item+'》'" />
        <div class="van-list__finished-text">查看更多</div>
      </van-list>
    </div>
    <div class="card">
      <van-row type="flex" justify="left"><span class="title">精品推荐</span></van-row>
      <van-list v-model="loading" :finished="finished">
        <van-cell v-for="item in list" :key="item" :title="'《'+item+'》'" />
        <div class="van-list__finished-text">查看更多</div>
      </van-list>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
import { Col, Row, Search, Image as VanImage, Lazyload, List, Cell, Loading } from 'vant'
Vue.use(Col).use(Row).use(Search).use(VanImage).use(Lazyload).use(List).use(Cell).use(Loading)

export default {
  name: 'AppIndex',
  data() {
    return {
      queryContent: "",
      list: ["冬天的雪", "夏天的风", "春天的花", "秋天的落叶", "四季的美"],
      loading: false,
      finished: true,
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
  }
}

</script>
<style type="text/css" scoped>
.card {
  margin-top: 8px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #DCDCDC;
  _height: 300px;
  min-height: 200px
}

.card .title {
  margin: 10px 10px 10px;
  font-size: 14px;
}

</style>
