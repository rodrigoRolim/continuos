<template>
<div>
 <button @click="showMessage">Click me!</button>
 <p id="message">{{msg}}</p>
</div>

</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    showMessage () {
      this.msg = 'welcome to my course of continuos integration'
    }
  }
}
</script>
<style>
button {
  background-color:aqua;
  color: white;
  padding: 12px 8px;
}
</style>
