<template>
<div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg='<span style="color:#fff;">HelloWorld</span>' />
  <ev/>
  <com :age="ages" @patch="msg">
    <h1 slot="a">加在上面</h1>
    <h1 slot="b">我要加东西2</h1>
  </com>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import ev from './components/events.vue'
import com from './components/com.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    ev,
    com
  },
  data() {
    return {
      ages: 184
    }
  },
  methods: {
    msg: function (ag) {
      this.ages++
      window.console.log(ag)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
