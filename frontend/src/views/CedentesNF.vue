<template>
  <div>
    <HeaderApp title="Cedente" />

     <v-card
    class="mx-auto"
    max-width="90%"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          CNPJ: {{ provider.CNPJ.cnpj }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Nome: {{ provider.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
            {{ provider.address }}, {{ provider.number}}
        </v-list-item-subtitle>
      </v-list-item-content>


    </v-list-item>

  </v-card>
  </div>
</template>

<script>
import HeaderApp from "../components/HeaderApp.vue";
import axios from 'axios';

export default {
    components: {
        HeaderApp,
    },
    data () {
        return {
            provider: null,
        }
    },
    mounted() {
        const provider = localStorage.getItem('providerId');
        axios.get(`http://localhost:3001/provider/${provider}`)
        .then(response => {
            this.provider = response.data;
            console.log(response.data)})
        .catch(error => console.log(error));
    }
};
</script>

<style scoped>
</style>
