<template>
<div>
 <button @click="showMessage">click me!</button>
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
      this.msg = 'welcome to the automated deployment pipeline'
    }
  }
}
</script>
<style>
button {
  background-color: rgb(83, 20, 165);
  color: white;
  padding: 12px 19px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 500;
}
#message {
  color: blue;
  font-size: 1.5rem;
}
</style>
