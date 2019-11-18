<template>
  <div id="app">
    <main>
      <h1>Page1 Main Page</h1>
      <router-view/>
    </main>

    <div id="nav">
      <a href="/page2.html">Page2 App</a><br>
      <router-link to="home">Page1 App Home</router-link><br>
      <router-link to="posts">Page1 App Posts</router-link>
  </div>
  </div>
</template>


<style lang="postcss">
#app {
  font-family: 'Avenir', Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color : #2c3e50;
}

#nav {
  padding: 30px;
}

#nva a {
  font-weight:bold;
  color : #2c3e50;

}
#nav a.router-link-exact-active {
  color :#42b983;
}
</style>
