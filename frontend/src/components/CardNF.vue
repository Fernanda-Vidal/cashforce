<template>
  <v-card class="mx-auto" outlined width="95%">
    <div class="card">
      <div class="item">{{ info.nNF }}</div>
      <div class="item">{{ info.Buyer.name }}</div>
      <div class="item">{{ info.Provider.name }}</div>
      <div class="item">{{ dataFormatada(info.emissionDate) }}</div>
      <div class="item">{{ info.value }}</div>
      <div class="item" v-if="Number(info.orderStatusBuyer) === 0">
        Pendende de confirmação</div>
      <div class="item" v-else-if="Number(info.orderStatusBuyer) === 1">
        Pedido confirmado</div>
      <div class="item" v-else-if="Number(info.orderStatusBuyer) === 2">
        Não reconhece o pedido</div>
      <div class="item" v-else-if="Number(info.orderStatusBuyer) === 3">
        Mercadoria não recebida</div>
      <div class="item" v-else-if="Number(info.orderStatusBuyer) === 4">
        Recebida com avaria</div>
      <div class="item" v-else-if="Number(info.orderStatusBuyer) === 5">
        Devolvida</div>
      <div class="item" v-else-if="Number(info.orderStatusBuyer) === 6">
        Recebida com devolução parcial</div>
      <div class="item" v-else-if="Number(info.orderStatusBuyer) === 7">
        Recebida e confirmada</div>
      <div class="item" v-else>Pagamento Autorizado</div>
      <button class="item">Dados do cedente</button>
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
.item {
  /* border: 1px solid brown; */
  width: 19%;
}

.card {
  display: flex;
  justify-content: space-between;
  /* margin-left: 55px; */
  /* margin-right: 25px; */
  width: 100%;
}

.mx-auto {
  /* border: 1px solid yellowgreen; */
  padding: 10px 15px 10px 15px;
  height: 40px;
  margin-bottom: 15px;
}

@media only screen and ( max-width: 1670px ) {
  .item {
    font-size: 10px;
  }
}

@media only screen and ( max-width: 1200px ) {
  .item {
    font-size: 8px;
  }
}
</style>
