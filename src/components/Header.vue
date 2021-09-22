<template>
  <div class="header">
    <h1>todos</h1>
    <BaseInput @input="insertValue" @enter="sendTodoName" :value="todoName"/>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";

export default {
  name: 'Header',
  data(){
    return{
      todoName : ''
    }
  },
  components:{BaseInput},
  methods:{
    insertValue(value){
      this.todoName = value;
    },
    sendTodoName(){
      this.$emit('send-todo', this.todoName);
      this.todoName="";
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
