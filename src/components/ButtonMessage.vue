<template>
<div>
 <button @click="showMessage">Click me!</button>
 <p id="message"></p>
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
      document.querySelector('#message').innerHTML = this.msg
    }
  }
}
</script>
<style></style>
