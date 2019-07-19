<template lang="html">
  <div class="com">
    <slot name="a"></slot>
    child components
    {{ name }} {{ age }}
    <button type="button" name="button" @click="$emit('patch',34)">发送到父组件</button>
    <slot name="b"></slot>
  </div>
</template>

<script>
export default {
  props: ['age'],
  data() {
    return {
      name: 'com'
    }
  }
}
</script>

<style lang="css">
</style>
