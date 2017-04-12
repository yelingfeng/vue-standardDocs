# Vue规范

1. 省略 style, template, script 的默认值，如使用 css 来写 style，不需要设定 lang
2. Vue组件配置属性，请参考如下顺序

    ```js
    {
      name: '',          // 组件定义名字 按业务逻辑定义 全部小写
      props: {},         // 属性定义需要给定类型和默认值
      components: {},
      filters: {},
      data(){

      },
      mounted(),         // ajax一般在这里调用
      ...生命周期钩子,
      computed: {},
      watch: {},
      methods: {}
    }
    ```

3. 私有函数用，请用下划线`_`开头
4. 非耦合组件不用`$refs`,`$parent` 进行层次实例访问 采用`$emit`


## 组件定义规范

一般在`components`文件夹下定义自己的组件

 例: 定义一个`job`组件

 1. 首先创建一个`job`目录
     ```
       /components
        -/job
     ```
 2. 创建一个入口文件`index.js`
     ```
       /components
        -/job
         index.js
     ```

    `index.js`

     > 这里内部你可能会有不同的组件 那么统一由es6的模块方式导出你的内部组件

    ```
    import jobInfo from './job-info';
    import jobNavbar from './job-navbar';

    export {
      jobInfo,
      jobNavbar
    };
    ```

## 组件间的使用

 由上面的`job`组件创建方式可以看到 组件在调用调出采用了 `import` 和 `export`

 无论在`Page`级别的vue组件还是`Components`级别的组件 统一采用这种方式定义和使用
