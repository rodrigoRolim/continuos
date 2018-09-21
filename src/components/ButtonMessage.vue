<template>
<div>
 <button @click="showMessage">click me now!</button>
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
  background-color: rgb(0, 255, 0);
  color: white;
  padding: 12px 19px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 500;
}
</style>
