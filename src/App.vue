<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <div>
    <main-nav />
    <router-view />
  </div>
</template>

<script>
import MainNav from "./components/Navigation/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
