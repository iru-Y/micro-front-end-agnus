<template>
  <div v-if="show" class="focus">
    <div class="modal-overlay">
        <div class="modal-content">
            <h1>Movimentações e Despesas do Dia</h1>
            <button @click="closemodal" v-if="show">x</button>
        </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MovExpModal',
  components: {
  },
  props: {
    show: Boolean
  },
  emits: ['close'],
  methods: {
    closemodal (){
      this.$emit('close')
    }
  }
})

</script>

<style lang="css" scoped>

.focus{
  position: fixed;
  width: 100%;
  height:100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.modal-overlay{
  position: fixed;
  top: 5%;
  left: 15%;
  width: 70%;
  height: 70%;
  background: white;
  border-color: black;
  border-radius: 8px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;

  border-radius: 20px;
}
.modal-content{
  display: flex;
  width: 100%;
  padding: 20px;
  margin-right: 20px;
}
button{
  background: transparent;
  width: 0;
  height: 0;
  border: none;
  color: black;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
} h1{
  flex-grow: 1;
  text-align: center;
}
</style>
