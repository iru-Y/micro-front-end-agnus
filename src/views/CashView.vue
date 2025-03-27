<template>
  <div class="cash_closure">
    <h1>Fechamento de caixa</h1>
    <div>
      <DefaultButton name="Adicionar Movimentação/Despesa"/>
      <DefaultButton name="Editar Caixa"/>
    </div>
    <h2>Adicionar Caixa</h2>
    <p>Código da Loja</p>
    <select id="cod_loja" name="cod_loja">
        <option value="">Selecione a loja</option>
    </select>
      <FormField name="Nome da loja"/>
      <FormField name="Venda Líquida"/>
      <FormField name="Valor disponível para depósito"/>
      <div>
        <DefaultButton name="Adicionar"/>
        <DefaultButton name="Gerar Registro de Caixa" color='#008000' hover-color="#00B300"/>
        </div>
        <MovExp/>
  </div>
</template>

<script lang="ts">

import DefaultButton from '@/components/DefaultButton.vue';
import FormField from '@/components/FormField.vue';
import MovExp from '@/components/MovExp.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CashRegister',
  components: {
    FormField, DefaultButton, MovExp
  }}
);
</script>

<style lang="css" scoped>
.cash_closure {
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: 0 auto;
  border-color: black;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 2px 2px black;
}
h1 {
  display: flex;
  color: #064554;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 32px;

}
h2 {
  color: #064554;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 900;
}
p{
  font-size: 14px;
}
select {
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

</style>
