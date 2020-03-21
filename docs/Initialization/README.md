# 环境

## Yarn

1. 使用[yarn](https://yarn.bootcss.com/)代替`npm`
2. node 版本>10+

## TypeScript

1. 全局安装 TypeScript

```sh
   # 安装
   yarn global add typescript
```

## Eslint

```sh
   # 安装
   yarn global add eslint
```

## VSCode

编辑器配置

`settings.json`

```json
{
  //.vue文件template格式化支持，并使用js-beautify-html插件
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  //js-beautify-html格式化配置，属性强制换行
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
    }
  },
  //根据文件后缀名定义vue文件类型
  "files.associations": {
    "*.vue": "vue"
  },
  //配置 ESLint 检查的文件类型
  "eslint.validate": [
    "javascript",
    "javascriptvue",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  //保存自动格式化
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.endOfLine": "crlf"
}
```

### koroFileHeader

> vscode 插件

- vscode 扩展插件
- 在文件头中添加注释
- 支持用户自定义文件注释模板对象
- 在你保存文件的时候 自动更新编辑时间

1. 文件头注释

```json
 // setting.json
 "fileheader.customMade": {
    "autoAdd": false,
    "Author": "renxiaofan",
    "Date": "Do not edit",
    "LastEditors": "renxiaofan",
    "LastEditTime": "Do not edit",
    "Description": "",
  }

```

文件注释生成

```js
/*
 * @Author: renxiaofan
 * @Date: 2020-03-20 09:37:59
 * @LastEditors: renxiaofan
 * @LastEditTime: 2020-03-20 09:40:48
 * @Description:
 */
```

快捷键

> `ctrl`+`alt`+`i`

2. 函数头注释

vscode 配置

```json

  // setting.json
  "fileheader.cursorMode": {
    "name": "",
    "param": "",
    "return": "",
    "description": "",
  }

```

快捷键

> `ctrl`+`alt`+`t`
