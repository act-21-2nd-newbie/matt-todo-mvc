<template>
  <section class="main">
    <input id="toggle-all" type="checkbox"
           :class="todoList.length === 0? 'hidden':'toggle-all'" :checked="toggleAllFlag"
           @click="$emit('click-toggle-all-btn',  $event.target.checked)">
    <label for="toggle-all"></label>
    <ul class="todo-list" v-for="(todoItem, index) in todoList" :key="todoItem.number">
      <TodoItem :number="index" :name="todoItem.name" :status="todoItem.status"
                @click-toggle-btn="changeToggle" @click-delete-btn="deleteTodoItem"/>
    </ul>
  </section>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: 'Main',
  components: {TodoItem},
  props: {
    todoList : Array,
    toggleAllFlag : Boolean,
  },
  methods:{
    changeToggle(idx){
      this.$emit('change-status', idx);
    },
    deleteTodoItem(idx){
      this.$emit('delete-item', idx);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
