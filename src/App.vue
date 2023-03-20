<template>
  <vue3-progress/>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$progress.finish()
  },
  created () {
    // exibe as animações do nprogress
    this.$progress.start()

    this.$router.beforeEach((to, from, next) => {
      this.$progress.start()
      next()
    })

    this.$router.afterEach(() => {
      this.$progress.finish()
    })
  }
}
</script>
