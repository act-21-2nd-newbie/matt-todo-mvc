<template>
  <input class="new-todo" autofocus="autofocus" autocomplete="off" placeholder='What needs to be done?'
         :value="value" @input="$emit('input', $event.target.value)" @keyup.enter="$emit('enter')"/>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: '',
    }
  }
}
</script>