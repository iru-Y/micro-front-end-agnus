<template>
  <div :style="{ marginBottom: marginBottom }">
    <p>{{ name }}</p>
    <input class="text-field" type="text">
    <div class="check-field"  v-if="showCheckbox">
      <input class="check-row" type="checkbox">
      <p>espécie?</p>
    </div>
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
    }, showCheckbox: {
      type: Boolean,
      default: false
    }, marginBottom:{
      type: String,
      default: "20px"
    }
  }

});
</script>

<style lang="css" scoped>

p {
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
}
.text-field {
    width: 100%;
      padding: 8px;
      border: 1px solid #4c5153;
      border-radius: 4px;
      font-size: 14px;
    }
.check-field{
  display: flex;

  margin-top: 10px;
}
.check-row{
  margin-right: 5px;
}
</style>
