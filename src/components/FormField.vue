<template>
  <div>
    <p>{{ name }}</p>
  <input type="text">
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormField',
  props: {
    name: {
      type: String,
      default: "none"
    }
  }
});
</script>

<style lang="css" scoped>
div {
  margin-bottom: 20px;
}
p {
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
}
  input {
    width: 100%;
      padding: 8px;
      border: 1px solid #4c5153;
      border-radius: 4px;
      font-size: 14px;
    }

</style>
