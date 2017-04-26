## config

 webpack 默认的一些配置参数

 `index` 模板引用路径

```js
    index :path.resolve(__dirname, '../dist/index.html')
```

  `port` 端口

```js
    port :'8888'
```

 `assetsPublicPath`  根路径

 一般可以用`/`表示当前根本目录.

 > 如果要部署到java环境 也可以在前缀 `projectName/`

 也可以是`CDN`路径 `https:xxxx/vx/xx`

```js
    assetsPublicPath: '/',
```

 `assetsRoot` 资源目录名

```js
    assetsRoot: path.resolve(__dirname, '../dist'),
```

 `assetsSubDirectory` 资源目录名下的二级目录 一般资源存在该目录下 包括打包后的`css`,`images`,`font`

```js
   assetsSubDirectory: 'static',
```


>  assetsPublicPath + assetsRoot + assetsSubDirectory

 对应的目录顺序 `/projectName/dist/static`