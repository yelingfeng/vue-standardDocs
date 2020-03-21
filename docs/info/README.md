# 常用库说明

## vue-class-component

> vue-class-component 对 Vue 组件进行了一层封装，让 Vue 组件语法在结合了 TypeScript 语法之后更加扁平化

[详细介绍](https://github.com/vuejs/vue-class-component)

## vue-property-decorator

> vue-property-decorator 是在 vue-class-component 上增强了更多的结合 Vue 特性的装饰器，新增了这 7 个装饰器

[详细介绍](https://github.com/kaorun343/vue-property-decorator)

```ts
import { Component, Prop, Vue } from 'vue-property-decorator'
import { http } from '@/common/request'
import { Action, namespace } from 'vuex-class'
// 取vuex的app模块
const appModuleVuex = namespace('app')
@Component
export default class HelloWorld extends Vue {
  // 注册属性
  @Prop() private msg!: string
  // 注册getter
  @appModuleVuex.Getter('getName') appName!: string
  //  注册action
  @Action('app/setAppNameAction') setAppAction!: Function
  // MOUNTED事件
  mounted() {
    // AXIOS get 请求
    http.get('/demo/test').then(resp => {
      console.log(resp)
    })
    // vue-ls取值
    const key = this.$ls.get('demoKey')
    if (key === null) {
      this.$ls.set('demoKey', 'xiaofan')
    } else {
      console.log(key)
    }
    // 触发action
    this.setAppAction({ name: 'sz' })
  }
}
```

## vuex-class

> vue-property-decorator 差不多，主要是通过装饰器模式，一来支持 ts 里的 vuex，二来减少冗余的代码量。

1. [详细介绍](https://github.com/ktsn/vuex-class)

```ts
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'

const someModule = namespace('path/to/module')

@Component
export class MyComp extends Vue {
  @State('foo') stateFoo
  @State(state => state.bar) stateBar
  @Getter('foo') getterFoo
  @Action('foo') actionFoo
  @Mutation('foo') mutationFoo
  @someModule.Getter('foo') moduleGetterFoo

  // 若省略参数，直接使用参数名称
  @State foo
  @Getter bar
  @Action baz
  @Mutation qux

  created() {
    this.stateFoo // -> store.state.foo
    this.stateBar // -> store.state.bar
    this.getterFoo // -> store.getters.foo
    this.actionFoo({ value: true }) // -> store.dispatch('foo', { value: true })
    this.mutationFoo({ value: true }) // -> store.commit('foo', { value: true })
    this.moduleGetterFoo // -> store.getters['path/to/module/foo']
  }
}
```

## vue-router

1. 按`module`划分路由模块

> /router/modules/system.ts

```ts
export const systemConifg = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/sys/login/index')
  }
]
```

## vuex

1. 按`module`划分路由 vuex 模块

> store/modules/app.ts

```ts
import { Module, MutationTree, ActionTree, ActionContext, GetterTree } from 'vuex'
import { RootState } from './../store'

// 定义接口
export interface AppState {
  isCollapse: boolean
  name?: string
}

const appState: AppState = {
  isCollapse: false,
  name: ''
}

const mutations: MutationTree<AppState> = {
  collapse(state: AppState) {
    state.isCollapse = !state.isCollapse
  },
  appName(state: AppState, appinfo: any) {
    state.name = appinfo.name
  }
}

const actions: ActionTree<AppState, RootState> = {
  /**
   * 测试 设置App Name
   * @param context
   * @param param
   */
  setAppNameAction(context: ActionContext<AppState, RootState>, param: any) {
    context.commit('appName', param)
  }
}

const getters: GetterTree<AppState, RootState> = {
  getName(state: AppState) {
    return state.name
  }
}

const app: Module<AppState, RootState> = {
  namespaced: true,
  state: appState,
  getters,
  actions,
  mutations
}

export default app
```
