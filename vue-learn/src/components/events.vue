<template lang="html">
  <div class="events">
    <button type="button" name="button" @click="msg('s',$event)">test</button>
    <div class="parent" @click="parent">
      <p>parent</p>
      <p>parent</p>
      <p>parent</p>
      <div class="child" @click.stop="child">
        child
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0
    };
  },
  methods: {
    msg: function (a, b) {
      window.console.log(Math.random(), a, b)
    },
    parent: function () {
      window.console.log('parent')
    },
    child: function () {
      window.console.log('child')
    }
  }
}
</script>

<style lang="css">
</style>
