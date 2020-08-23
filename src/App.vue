<template>
  <div id="app" :class="{'dark-theme': darkTheme}">
    <header>
      <div class="app-logo">
        Air Quality
      </div>
      <nav id="nav">
        <router-link to="/">My Air Quality</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      darkTheme: false,
    };
  },
});
</script>

<style lang="scss">
@use 'node_modules/reset-css/reset.css';

:root{
  box-sizing: border-box;
  font-size: 100%; // REM SIZE
  background: #f2f2f2;

  --font-title: 'Oxygen', sans-serif;
  --font-base: 'Fira Sans', sans-serif;
}

*, *::after, *::before{
  box-sizing: inherit;
}

body{
  color: #333;
  line-height: 1.5;
  font-family: var(--font-base, sans-serif);
}

#app {
  display: grid;
  min-height: 100vh;
  grid-template-rows: 80px 1fr auto;
  grid-template-columns: 1fr;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
}

#nav {
  a {
    &.router-link-exact-active {
    }
  }
}
</style>
