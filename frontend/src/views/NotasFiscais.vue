<template>
  <div>
    <HeaderNF />
    <div v-for="(nf, i) in nfs" v-bind:key="i">
        <CardNF :info="nf" />
    </div>
  </div>
</template>

<script>
import HeaderNF from "../components/HeaderNF.vue";
import CardNF from "../components/CardNF.vue";
import axios from "axios";

export default {
  components: {
    HeaderNF,
    CardNF,
  },
  data () {
    return {
      nfs:[]
    }
  },
  mounted(){
    axios.get(`http://localhost:3001/order/user/6`)
    .then(response => {
      this.nfs = response.data;
      console.log(this.nfs)})
    .catch(error => console.log(error))
  }
};
</script>

<style scoped>
</style>
