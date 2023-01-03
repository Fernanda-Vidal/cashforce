<template>
  <v-card class="mx-auto" outlined width="95%">
    <div class="card">
      <div class="item">{{ info.nNF }}</div>
      <div class="item">{{ info.Buyer.name }}</div>
      <div class="item">{{ info.Provider.name }}</div>
      <div class="item">{{ dataFormatada(info.emissionDate) }}</div>
      <div class="item cor">{{ `R$ ${info.value}` }}</div>
      <div class="item cor" v-if="Number(info.orderStatusBuyer) === 0">
        PENDENTE DE CONFIRMAÇÃO</div>
      <div class="item cor" v-else-if="Number(info.orderStatusBuyer) === 1">
        PEDIDO CONFIRMADO</div>
      <div class="item cor" v-else-if="Number(info.orderStatusBuyer) === 2">
        NÃO RECONHECE O PEDIDO</div>
      <div class="item cor" v-else-if="Number(info.orderStatusBuyer) === 3">
        MERCADORIA NÃO RECEBIDA</div>
      <div class="item cor" v-else-if="Number(info.orderStatusBuyer) === 4">
        RECEBIDA COM AVARIA</div>
      <div class="item cor" v-else-if="Number(info.orderStatusBuyer) === 5">
        DEVOLVIDA</div>
      <div class="item cor" v-else-if="Number(info.orderStatusBuyer) === 6">
        RECEBIDA COM DEVOLUÇÃO PARCIAL</div>
      <div class="item cor" v-else-if="Number(info.orderStatusBuyer) === 7">
        RECEBIDA E CONFIRMADA</div>
      <div class="item cor" v-else>PAGAMENTO AUTORIZADO</div>
      <v-btn
      class="item botao"
      rounded
      color="white"
      dark
      height="25px"
      min-width="15%"
      @click="handleClick">
    Dados do cedente</v-btn>
    </div>
  </v-card>
</template>

<script>
import router from '../router/index';

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
},
    handleClick () {
      router.push({ name: 'cedente' })
  },
  }
}
</script>

<style scoped>
.item {
  color: #4d5566;
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

.botao {
  color: #727d94;
  font-size: 10px;
  /* font-weight: bold; */
  height: 10px;
}

.mx-auto {
  /* border: 1px solid yellowgreen; */
  padding: 10px 15px 10px 15px;
  height: 40px;
  margin-bottom: 15px;
}

.cor {
  color: #00ad8c;
  font-size: 13px;
}
@media only screen and ( max-width: 1400px ) {
  .mx-auto {
  height: 60px;
}
}

@media only screen and ( max-width: 1650px ) {
  .item {
    font-size: 13px;
  }

  .botao {
    font-size: 10px;
  }

  .cor {
    font-size: 10px;
  }
}
</style>
