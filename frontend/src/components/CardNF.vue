<template>
  <v-card class="mx-auto" outlined width="95%">
    <div class="card">
      <span>{{ info.nNF }}</span>
      <span>{{ info.Buyer.name }}</span>
      <span>{{ info.Provider.name }}</span>
      <span>{{ dataFormatada(info.emissionDate) }}</span>
      <span>{{ info.value }}</span>
      <span v-if="Number(info.orderStatusBuyer) === 0"
        >Pendende de confirmação</span
      >
      <span v-else-if="Number(info.orderStatusBuyer) === 1"
        >Pedido confirmado</span
      >
      <span v-else-if="Number(info.orderStatusBuyer) === 2"
        >Não reconhece o pedido</span
      >
      <span v-else-if="Number(info.orderStatusBuyer) === 3"
        >Mercadoria não recebida</span
      >
      <span v-else-if="Number(info.orderStatusBuyer) === 4"
        >Recebida com avaria</span
      >
      <span v-else-if="Number(info.orderStatusBuyer) === 5">Devolvida</span>
      <span v-else-if="Number(info.orderStatusBuyer) === 6"
        >Recebida com devolução parcial</span
      >
      <span v-else-if="Number(info.orderStatusBuyer) === 7"
        >Recebida e confirmada</span
      >
      <span v-else>Pagamento Autorizado</span>
      <button>Dados do cedente</button>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
      info:  [Object]
  },
  methods: {
    dataFormatada (dataApi) {
      const data = new Date(dataApi);
      const ten = 10;

      const dataF = `${((data.getDate()))}/0${((data.getMonth() + 1))}/${data.getFullYear()}`;
        if (dataApi === '') return '';
        else if (dataF.length < ten) {
      const newDate = `0${dataF}`;
      return newDate;
  }

  return dataF;
}
  }
}
</script>

<style scoped>
.card {
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
  margin-left: 55px;
  margin-right: 25px;
}

.mx-auto {
  padding: 10px 15px 10px 15px;
  margin-bottom: 15px;
}
</style>
