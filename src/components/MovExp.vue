<template>
  <div class="movExp">
    <p>Movimentação do dia</p>
    <p >Relação de Despesas</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MovExp'
});
</script>

<style lang="css" >

.movExp{
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  box-shadow: 0 0 2px 2px black;
  font-size: 18px;
  p{
    color: #064554;
    font-weight: bolder;
  }
}


</style>
