import Vue from 'vue'
import ButtonMessage from '@/components/ButtonMessage'
import sinon from 'sinon'
import { expect } from 'chai'

describe('ButtonMessage.vue', () => {
 it('should show message', () => {
  const Constructor = Vue.extend(ButtonMessage)
  const vm = new Constructor().$mount()
  const button = vm.$el.querySelector('button');
  const clickEvent = new window.Event('click');
  button.dispatchEvent(clickEvent)
  vm._watcher.run()
  expect(vm.$el.querySelector('#message').textContent).to
  .equal('welcome to my course of continuos integration')
 })
})
