<template>
    <button class="custom-button"> {{ name }} </button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultButton',
  props:{
    color: {
      type: String,
      default: '#064554'
    },
    hoverColor:{
      type: String,
      default: '#006178'
    },
    name: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="css" scoped>
.custom-button {
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  background-color: v-bind(color);
  border: none;
  cursor: pointer;
}
.custom-button:hover {
  background-color: v-bind(hoverColor);
}

</style>
