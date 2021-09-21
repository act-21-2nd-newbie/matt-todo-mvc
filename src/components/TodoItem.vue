<template>
  <li class="todo">
    <div class="view">
      <input type="checkbox" class="toggle"
             @click="$emit('click-toggle-btn', number)" :checked="status">
      <label>{{name}}</label>
      <button class="destroy" @click="$emit('click-delete-btn', number)" />
    </div>
    <input type="text" class="edit">
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props:{
    number: Number,
    name : String,
    status : Boolean,
  },
}
</script>

<style scoped>

</style>