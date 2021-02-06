<template>
  <div>
    <Nuxt />
    <div class="navigation">
      <NuxtLink to="/">Home</NuxtLink>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.navigation
  position fixed
  top 0
  right 0
  width 100px
  height 100vh
  padding 20px
  z-index 100
  a
    text-decoration none
    text-transform uppercase
    color white
</style>
