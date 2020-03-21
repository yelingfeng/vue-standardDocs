# 使用

## 初始化

```sh
yarn install
```

## 启动

```sh
// 启动
yarn dev

// 构建
yarn build

// eslint 格式化
yarn lint

```

## 插件

### 开发时插件

```sh
    yarn add -dev / -D  prettier
```

### 运行时插件

```sh
    yarn add -save / -S  lodash
```

## vue 配置

> vue.config.js

```js
// 服务器端口
const devServerPort = 8111

// publicpath
const publicPath = IS_PROD ? '/DAM/' : '/'

// mockServer代理配置
const mockServer = 'http://172.17.20.226:8010/mockjsdata/1/'
```

## 环境变量

`.env.development` 开发环境变量配置

```
    VUE_APP_BASE_API = '/API'
```

`.env.development` 构建时环境变量

```
    VUE_APP_BASE_API = '/'
```
