<template>
  <div class="cash_closure">
    <h1>Fechamento de caixa</h1>
    <div>
      <DefaultButton  @click="openModal" width="" name="Adicionar Movimentação/Despesa"/>
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

        <MovExpModal :show="modalVisible" @close="modalVisible = false"/>
  </div>
</template>

<script lang="ts">

import DefaultButton from '@/components/DefaultButton.vue';
import FormField from '@/components/FormField.vue';
import MovExp from '@/components/MovExp.vue';
import MovExpModal from '@/modal/MovExpModal.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CashRegister',
  components: {
    FormField, DefaultButton, MovExp, MovExpModal
  },
  setup() {
      const modalVisible = ref(false)

      const openModal = () => {
        modalVisible.value = true;
      }


      return { modalVisible, openModal};
  }
}
);


</script>

<style lang="css">
@media screen and (min-width: 760px) and (max-width: 1199px) {
  .container {
    max-width: 760px;
  }
}
@media screen and (max-width: 759px) {

}
.cash_closure {
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: 0 auto;
  border-color: black;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
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
  button {
  padding: 0.5rem 1rem;
  background: linear-gradient(#44dafd, #16c7f1);
  border: none;
  border-radius: 0.5rem;
  color: #064554; 
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  line-height: 1.4;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

}
button:hover {

  background: linear-gradient(#3ac7e7, #13b1d9);
}
</style>
