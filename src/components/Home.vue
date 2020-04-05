<template>
  <div>
    <h1>Home组件</h1>
    <el-button type="primary" @click="logout">退出登录</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
