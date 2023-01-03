<template>
  <div class="main">
    <HeaderApp title="Notas fiscais"/>
    <p>Visualize as notas fiscais que você tem.</p>
    <div class="header">
      <div class="title">
        <p>NOTA FISCAL</p></div>
      <div class="title">
        <p>SACADO</p></div>
      <div class="title">
        <p>CEDENTE</p></div>
      <div class="title">
        <p>EMISSÃO</p></div>
      <div class="title">
        <p>VALOR</p></div>
      <div class="title">
        <p>STATUS</p></div>
      <div class="title">

      </div>
    </div>

  </div>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";

export default {
  components: {
    HeaderApp,
  },
};
</script>

<style scoped>
.main {
  margin-left: 2%;
  margin-top: 70px;
  width: 95%;
}

p {
  margin-bottom: 15px;
  color: #7b7484;
  font-size: 13px;
}

.header {
  margin-bottom: 1%;
  color: #7b7484;
  display: flex;
  font-weight: bold;
  font-size: 9px;
  width: 100%;
}

.title {
  height: 20px;
  font-size: 9px;
  margin: 10px;
  width: 19%;
}
</style>
