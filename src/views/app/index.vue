<template>
  <div style="width: 90%;margin:0 auto;margin-top:2%">
    <van-row>
      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    </van-row>
    <van-row type="flex" justify="center">
      <van-image fit="cover" width="1000" height="100" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </van-row>
  </div>
</template>
<script>
import Vue from 'vue';
import { Col, Row, Search, Image as VanImage, Lazyload } from 'vant'
Vue.use(Col).use(Row).use(Search).use(VanImage).use(Lazyload)

export default {
  name: 'AppIndex',
  data() {
    return {
      value: ""
    }
  }
}

</script>
