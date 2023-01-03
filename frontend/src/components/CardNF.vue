<template>
  <v-card
    class="mx-auto"
    outlined
    width=95%
  >
  <div class="card">

  <span>{{info.nNF}}</span>
  <span>{{info.buyerId}}</span>
  <span>{{info.providerId}}</span>
  <span>{{info.emissionDate}}</span>
  <span>{{info.value}}</span>
  <span>{{info.orderStatusBuyer}}</span>
  <button>Dados do cedente</button>
  </div>
  
  </v-card>
</template>

<script>
  export default {
    props: {
        info:  [Object]
    }
  }
</script>

<style scoped>
    .card {
        /* background-color: brown; */
        display: flex;
        justify-content:space-between;
        margin-left: 55px;
        margin-right: 25px;        
    }

    .mx-auto {
        padding: 10px 15px 10px 15px;
        margin-bottom: 15px;
    }


</style>