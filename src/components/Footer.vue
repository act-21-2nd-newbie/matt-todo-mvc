<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todoItemCount}}</strong> item left</span>
    <!--
    <ul class="filters" @click="$emit('change-visibile-item', href())">
      <li><a href="#/all" :class="chooseStatus === 'all'? 'selected' : ''">All</a></li>
      <li><a href="#/active" :class="chooseStatus === 'active'? 'selected' : ''">Active</a></li>
      <li><a href="#/completed" :class="chooseStatus === 'completed'? 'selected' : ''">Completed</a></li>
    </ul>
    <ul class="filters" v-for="statusItem in statusList" :key="statusItem">
      <li><a :class="chooseStatus === statusItem? 'selected' : ''" @click="$emit('change-visibile-item', statusItem)">{{statusItem}}</a></li>
    </ul>
    -->
    <ul class="filters" @click="$emit('change-visibile-item', $event.target.innerText)">
      <li><a :class="chooseStatus === 'All'? 'selected' : ''" >All</a></li>
      <li><a :class="chooseStatus === 'Active'? 'selected' : ''">Active</a></li>
      <li><a :class="chooseStatus === 'Completed'? 'selected' : ''">Completed</a></li>
    </ul>
    <button class="clear-completed" style="display: flex;">Clear completed</button>
  </footer>
</template>

<script>`
`
export default {
  name: 'Footer',
  props: {
    chooseStatus: String,
    todoItemCount : Number,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
