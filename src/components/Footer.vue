<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todoItemCount}}</strong> item left</span>
    <ul class="filters" @click="$emit('change-visibile-item', $event.target.innerText)">
      <li><a href="#/all" :class="chooseStatus === 'All'? 'selected' : ''" >All</a></li>
      <li><a href="#/active" :class="chooseStatus === 'Active'? 'selected' : ''">Active</a></li>
      <li><a href="#/completed" :class="chooseStatus === 'Completed'? 'selected' : ''">Completed</a></li>
    </ul>
    <button :class="clearCompletedFlag? 'clear-completed' : 'hidden'"
            @click="$emit('delete-all-item')">Clear completed</button>
  </footer>
</template>

<script>`
`
export default {
  name: 'Footer',
  props: {
    chooseStatus: String,
    todoItemCount : Number,
    clearCompletedFlag : Boolean,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
