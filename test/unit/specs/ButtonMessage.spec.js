import Vue from 'vue'
import ButtonMessage from '@/components/ButtonMessage'

describe('ButtonMessage.vue', () => {
 it('should show message', () => {
  const Constructor = Vue.extend(ButtonMessage)
  const vm = new Constructor().$mount()
  vm.showMessage();
  expect(vm.$el.querySelector('#message').textContent).to
  .equal('welcome to my course of continuos integration')
 })
})
