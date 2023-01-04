<template>
  <div>
    <HeaderNF />
    <div v-for="(nf, i) in nfs" v-bind:key="i">
        <CardNF :info="nf" />
    </div>
    <NavBar /> 
  </div>
</template>

<script>
import HeaderNF from "../components/HeaderNF.vue";
import CardNF from "../components/CardNF.vue";
import NavBar from "../components/NavBar.vue";
import axios from "axios";

export default {
  components: {
    HeaderNF,
    CardNF,
    NavBar,
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

