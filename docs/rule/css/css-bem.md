# 组件BEM规范

 组件采用BEM规范 以`PostCSS`为主实现  使用`postcss-salad` [salad](http://elemefe.github.io/postcss-salad/index)


 >  [BEM CSS命名规范](http://www.jianshu.com/p/407bd68a5677)

 >  [SALAD-BEM语法](https://www.npmjs.com/package/saladcss-bem)


 ## 基本用法

!>  采用缩写模式`@b`、`@e`、`@m`

  ```css
  @b nav { /* b is for block */
      @e item { /* e is for element */
          display: inline-block;
      }
      @m placement_header {
          background-color: red;
      }
  }
  ```

  生成
  ```css
  .nav {}
  .nav__item {
      display: inline-block
  }
  .nav_placement_header {
      background-color: red
  }

  ```

  ## 组件定义

  定义`dialog`组件样式 写在dialog.css中

  以指定的命名空间为起始命名 保证系统级别的规范

!>  `@component-namespace`表示组件命名空间叫`df`

  ``` css
    @component-namespace df {
        @b dialog {
            width : 500px ;

            @e model{
                color : red;

                @m actived{
                   padding : 10px;
                }
            }
        }
    }
  ```

  `postcss`转换后
  ```css
        df-dialog {
            width :500px;
        }
        df-dialog__model{
            color : red;
        }
        df-dialog__model--actived{
            padding : 10px;
        }

  ```