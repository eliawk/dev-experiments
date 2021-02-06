<template>
  <div class="container">
    <div>
      <h1 class="title">experiments</h1>
      <nav>
        <NuxtLink to="/basic">Basic</NuxtLink>
        <NuxtLink to="/mouse-follower">Mouse Follower</NuxtLink>
        <NuxtLink to="/history-path">History path</NuxtLink>
        <NuxtLink to="/waves">Waves</NuxtLink>
        <NuxtLink to="/organic-forms">Organic Forms</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.container {
  padding 20px
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

nav
  a
    display: block
    text-decoration: none
    color black
</style>
