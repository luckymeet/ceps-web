<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted: function() {
    if (this.isMobile()) {
      // alert("手机端");
      this.$router.replace('/app/index');
    } else {
      // alert("pc端");
      this.$router.replace('/web/index');
    }
  },
  methods: {
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  }
}

</script>
<style>
</style>
