<template>
  <div class="cash_closure">
    <h1>Fechamento de caixa</h1>
    <div class="group-edit-button">
      <button>Adicionar Movimentação/Despesa</button>
      <button>Editar Caixa</button>
    </div>
    <h2>Adicionar Caixa</h2>
    <p>Código da loja</p>
    <select id="cod_loja" name="cod_loja">
        <option value="">Selecione a loja</option>
    </select>
    <FormField />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CashRegister',
});
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
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
  color: #006178;
  font-family: 'Poppins', sans-serif;
  justify-content: center;
}
h2 {
  display: flex;
  color: #006178;
  font-family: 'Poppins', sans-serif;
}
p {
  font-family: 'Poppins', sans-serif;
}
.group-edit-button {
  display: flex;
  justify-content: start;
  align-items: start;
}
.group-edit-button button {
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: #064554;
  color: white;
  border: none;
  cursor: pointer;
}
.group-edit-button button:hover {
  background-color: #006178;
}
</style>
