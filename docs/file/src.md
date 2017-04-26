# src

主源码包

```js
    assets
    commmon
    components
    pages
    router
    utils
    vuex
        App.vue
        main.js
```

## assets

 `assets` 主要存放资源包括 开发用到的图片、css、字体等

> css里配置的url路径 要写相对路径

## common

 `common` 通用的抽象工具或者方法

```js

    // 取通用的ajax方法
    import { ajax } from 'common'


```


## components

`component` 存放抽象出来的组件

例如 `Menu.vue` 封装一个菜单组件

## pages

`pages` 存放业务界面

这里划分`模块` 分多级模块 这里要跟`router`去映射

``` js
   bizA
       bizA-page1
       bizA-page2
   bizB
       bizB-page1
       bizB-page2
   bizC
       ...
```


## router

`router` 前端路由 配置目录

这里主要配置一个系统的路由信息 具体去查看`vue-router`文档相关使用资料


## utils

`utils` 通用的工具类 目录

可以把一些复用性比较多的方法 扔到`utils`里

## vuex

 `vuex` 构建vuex全局状态管理的目录

```js
    modules
       global
       user
       bizA
    constans.js
    index.js
```


> vuex目录划分模块 根模块为`global` 其他按业务模块或者组件去划分

