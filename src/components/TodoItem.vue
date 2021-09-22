<template>
  <li :class="status === false? 'todo' : 'todo completed'">
    <div class="view">
      <input type="checkbox" class="toggle" :checked="status"
             @click="$emit('click-toggle-btn', number)">
      <label>{{name}}</label>
      <button class="destroy" @click="$emit('click-delete-btn', number)" />
    </div>
    <input type="text" class="edit">
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props:{
    number: Number,
    name : String,
    status : Boolean,
  },
}
</script>

<style scoped>

</style>