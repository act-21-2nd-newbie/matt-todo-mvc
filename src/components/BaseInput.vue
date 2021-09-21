<template>
  <input class="new-todo" @input="$emit('input', $event.target.value)"
         @keyup.enter="$emit('enter')" :value="value" autofocus="autofocus" autocomplete="off" placeholder="What needs to be done?" />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
      default: '',
    }
  }
}
</script>