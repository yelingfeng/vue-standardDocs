# test

测试文件夹 `e2e` 端到端测试 , `unit` 单元测试

`karma` + `mocha` + `chai`


## unit

```js

import Vue from 'vue'
import Hello from '@/components/Hello'


describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})

```