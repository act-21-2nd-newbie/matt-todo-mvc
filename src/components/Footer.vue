<template>
  <footer class="footer">
    <span class="todo-count"><strong>1</strong>item left</span>
    <ul class="filters">
      <li><a href="#/all" class="selected">All</a></li>
      <li><a href="#/active" class="">Active</a></li>
      <li><a href="#/completed" class="">Completed</a></li>
    </ul>
    <button class="clear-completed" style="display: flex;">Clear completed</button>
  </footer>
</template>

<script>`
`
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
