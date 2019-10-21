<template>
  <div id="app">
    <main>
      <h1>Page2 Main Page</h1>
    </main>
    <div id="nav">
      <a href="/page1/">Page1</a>
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
