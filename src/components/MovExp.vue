<template>
  <div class="movExp">
   <div>
    <p>Movimentação do dia</p>

    <ul>
      <li>
        Calça
      </li>
    </ul>
    <ul>
      <li>
        R$: 22
      </li>
    </ul>
   </div>
   <div>
    <p >Relação de Despesas</p>
    <ul>
      <li>
        Calça
      </li>
    </ul>
    <ul>
      <li>
        R$: 22
      </li>
    </ul>
   </div>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MovExp'
});
</script>

<style lang="css" scoped>

.movExp{
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  border-color: black;
  border-radius: 8px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  p{
    color: #064554;
    font-weight: bolder;
  }
}
li{
  list-style: none;
  color: #006178;
}
ul{
  display: inline-block;
  margin-right: 95px;
}

</style>
