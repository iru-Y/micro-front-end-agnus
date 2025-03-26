<template>
  <div>
    <h1>{{ name }}</h1>
    <FormField />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FieldForm',
  data() {
    return {
      name: 'Seu Nome',
    };
  },
});
</script>

<style lang="css" scoped>

</style>
