<template>
<NavBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  }
  // data: () => ({}),
};
</script>

<style scoped>
a {
  text-decoration: none;
}

p {
  color: #0bb091;
}

.item-nav {
  color: #0bb091;
}

.container-item:hover {
  border-left: 5px solid #0bb091;
}

.nav-drawer {
  background-color: #f7f9fb;
}
</style>
