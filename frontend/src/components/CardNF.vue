<template>
  <v-card
    class="mx-auto"
    outlined
    width=95%
  >
  <div class="card">

  <span>{{info}}</span>
  <span>{{info}}</span>
  <span>{{info}}</span>
  <span>{{info}}</span>
  <span>{{info}}</span>
  <span>{{info}}</span>
  <button>Dados do cedente</button>
  </div>
  
  </v-card>
</template>

<script>
  export default {
    props: {
        info:  String,
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