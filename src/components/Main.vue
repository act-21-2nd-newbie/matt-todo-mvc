<template>
  <section class="main">
    <input id="toggle-all" type="checkbox"
           :class="toggleAllShowFlag? 'hidden':'toggle-all'" :checked="toggleAllFlag"
           @click="$emit('click-toggle-all-btn',  $event.target.checked)">
    <label for="toggle-all"></label>
    <ul class="todo-list" v-for="todoItem in todoList" :key="todoItem.id">
      <TodoItem :id="todoItem.id" :name="todoItem.name" :status="todoItem.status"
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
    toggleAllShowFlag : Boolean,
  },
  methods:{
    changeToggle(id){
      this.$emit('change-status', id);
    },
    deleteTodoItem(id){
      this.$emit('delete-item', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
