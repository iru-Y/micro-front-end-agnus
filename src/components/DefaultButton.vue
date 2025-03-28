<template>
    <button class="custom-button"
    @click="handleClick"
   >
     {{ name }} </button>
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
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '40px'
    }

  },
  emits: ['click'],
  methods: {
    handleClick(){
      this.$emit('click')
    }
  }
  }
)

</script>

<style lang="css" scoped>

button{
  margin-right: 10px;
  width:v-bind(width);
  height: v-bind(height);
}

</style>
