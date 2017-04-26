## build

`webpack`基础配置构建目录

```js
    // 基础构建配置
    webpack.base.config.js
    // dev
    webpack.dev.config.js
    // prod
    webpack.prod.config.js
    // test
    webpack.test.config.js
```


## webpack.base.config

   `entry` 表示要加载的源码模块

```js
    entry: {
       app: './src/main.js'
    }
```

   `output` 输出后的配置
```js
   output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
         ? config.build.assetsPublicPath
         : config.dev.assetsPublicPath
    }
```

`resolve.extensions` 加载模块时候省略的后缀名

`resolve.alias` 加载路径的别名映射处理

```js
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'src':  resolve('src'),
        'common':'src/common',
        'components': 'src/components',
        'example':'src/example',
        'pages':'src/pages',
        'router':'src/router',
        'assets':'src/assets'
    }
```
> 这里当`import { xxx } from 'common'` 的时候 会根据`alias` 去找对应的路径模块


  `module.rule` webpack的核心配置

```js

    rules: [
          {
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [resolve('src'), resolve('test')],
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
          }
    ]

```

 * 这里主要通过`rule`配置 webpack `loader` 根据插件去处理各种类型的文件







