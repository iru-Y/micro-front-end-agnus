<template>
  <div v-if="show" class="focus">
    <div class="modal-overlay">
        <div class="modal-content">
            <h1>Movimentações e Despesas do Dia</h1>
            <button @click="closemodal" v-if="show" >x</button>
        </div>
          <div class="add-mov-exp">
            <FormField name="Movimentação" :marginBottom="'0px'" :show-checkbox="true"/>
            <FormField name="Despesa" :show-checkbox="true"/>
          </div>
          <div class="add-value">
            <FormField name="valor"/>
            <FormField name="valor"/>
          </div>
    </div>
  </div>
</template>

<script lang="ts">
import FormField from '@/components/FormField.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MovExpModal',
  components: {
    FormField
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

  border-radius: 20px;
}
.modal-content{
  display: flex;
  width: 100%;
  padding: 20px;
  margin-right: 20px;
}
button{
  width: 0;
  height: 0;
  font-size: 20px;
  background: none;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  outline: none;

} button:hover{
  width: 0;
  height: 0;
  background: none;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}
 h1{
  flex-grow: 1;
  text-align: center;
}
.add-mov-exp {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.add-value{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

</style>
