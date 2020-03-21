# TypeScript

## 注释

### 文件顶部的注释，包括描述、作者、日期

```ts
/**
 * @description xxxxxx
 * @author renxiaofan
 * @since 2020/03/01
 */
```

### 方法/类的注释

```ts
/**
 * 拷贝数据
 * @param  {object}  data   要拷贝的源数据
 * @param  {boolean} [isDeep=false] 是否深拷贝，默认浅拷贝
 * @return {xxxx}         返回拷贝后的数据
 */
```

### 变量注释

```ts
// 接口含义
interface IState {
  // 名字
  name: string
  // 电话
  phone: number
  // 地址
  address: string
}
```

## 命名

1. 类名: 大驼峰式风格，字母和数字，

   > 例如：AbcTest。禁止汉字、特殊符号，禁止非大驼峰式风格。

2. 函数名: 小驼峰式风格，字母和数字

   > 例如：abcTest。禁止汉字、特殊符号，禁止非小驼峰式风格，例如 snake_case 等。

3. 变量名: 同函数名。

4. 常量: 全大写风格，大写字母、数字和下划线，单词之间以下划线分隔

   > 例如：ABC_TEST。禁止汉字、特殊符号、小写字母。

5. 使用 onXxx 形式作为 props 中用于回调的属性名称。

```ts
interface IProps {
  onClose?: () => void
  onOk?: (item: Record<string, any>) => void
}
```

- 组件内的事件函数使用 handle 开头尾,handleCheckBtn
- 接口命名前面带上 I 表示 interface

6. `Views`模块

```js
  |Views
  |  - Ddocs           --------  一级业务模块
  |  --- DdocsAttact   --------  二级业务模块
  |  - FlowIn          --------  一级业务模块
  |  --- FlowInXXXXX   --------  二级业务模块
```

## 变量

### 变量名定义

做有意义的区分，让读者更容易理解变量的含义

```ts
//bad
function between<T>(a1: T, a2: T, a3: T) {
  return a2 <= a1 && a1 <= a3
}

// nice
function between<T>(value: T, left: T, right: T) {
  return left <= value && value <= right
}
```

### 变量名可拼读出来

尽量取有意义 好理解的单词

```ts
// bad
class DtaRcrd102 {
  private genymdhms: Date
  private modymdhms: Date
  private pszqint = '102'
}

// nice
class Customer {
  private generationTimestamp: Date
  private modificationTimestamp: Date
  private recordId = '102'
}
```

### 使用可检索的名字

我们读代码要比写的多，所以易读性和可检索非常重要

```ts
// What the heck is 86400000 for?
setTimeout(restart, 86400000)

// Declare them as capitalized named constants.
const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000
setTimeout(restart, MILLISECONDS_IN_A_DAY)
```

### 不添加无用的上下文

如果类名或对象名已经表达了某些信息，在内部变量名中不要再重复表达

```ts
// bad
type Car = {
  carMake: string
  carModel: string
  carColor: string
}

function print(car: Car): void {
  console.log(`${this.carMake} ${this.carModel} (${this.carColor})`)
}

//  NICE
type Car = {
  make: string
  model: string
  color: string
}

function print(car: Car): void {
  console.log(`${this.make} ${this.model} (${this.color})`)
}
```

### 使用默认参数，而非短路或条件判断

```ts
// bad
function loadPages(count: number) {
  const loadCount = count !== undefined ? count : 10
  // ...
}

// nice
function loadPages(count: number = 10) {
  // ...
}
```

## 函数

### 参数尽量减少，使用接口或者 type 定义

```ts
type MenuOptions = {
  title: string
  body: string
  buttonText: string
  cancellable?: boolean
}

function createMenu(options: MenuOptions) {
  // ...
}

createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
})
```

### 使用 Object.assign 或解构来设置默认对象

```ts
type MenuConfig = { title?: string; body?: string; buttonText?: string; cancellable?: boolean }

// bod
function createMenu(config: MenuConfig) {
  config.title = config.title || 'Foo'
  config.body = config.body || 'Bar'
  config.buttonText = config.buttonText || 'Baz'
  config.cancellable = config.cancellable !== undefined ? config.cancellable : true
}

const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
}

createMenu(menuConfig)

// nice
function createMenu(config: MenuConfig) {
  const menuConfig = Object.assign(
    {
      title: 'Foo',
      body: 'Bar',
      buttonText: 'Baz',
      cancellable: true
    },
    config
  )
}

createMenu({ body: 'Bar' })

// 解构方法
type MenuConfig = { title?: string; body?: string; buttonText?: string; cancellable?: boolean }

function createMenu({
  title = 'Foo',
  body = 'Bar',
  buttonText = 'Baz',
  cancellable = true
}: MenuConfig) {
  // ...
}

createMenu({ body: 'Bar' })
```

## 类

### 单一职责原则，类要小

```ts
// bad
class Dashboard {
  getLanguage(): string {
    /* ... */
  }
  setLanguage(language: string): void {
    /* ... */
  }
  showProgress(): void {
    /* ... */
  }
  hideProgress(): void {
    /* ... */
  }
  isDirty(): boolean {
    /* ... */
  }
  disable(): void {
    /* ... */
  }
  enable(): void {
    /* ... */
  }
  addSubscription(subscription: Subscription): void {
    /* ... */
  }
  removeSubscription(subscription: Subscription): void {
    /* ... */
  }
  addUser(user: User): void {
    /* ... */
  }
  removeUser(user: User): void {
    /* ... */
  }
  goToHomePage(): void {
    /* ... */
  }
  updateProfile(details: UserDetails): void {
    /* ... */
  }
  // ...
}

//nice

class Dashboard {
  disable(): void {
    /* ... */
  }
  enable(): void {
    /* ... */
  }
  getVersion(): string {
    /* ... */
  }
}

// split the responsibilities by moving the remaining methods to other classes
// ...
```

## 引用组件顺序

1. 先引用外部组件库,再引用当前组件块级组件, 然后是 common 里的公共函数库最后是 css 样式

```ts
import { Component, Vue } from 'vue-property-decorator'
import { Dropdown, Menu, Icon } from 'element-ui'
import Header from './Header'
import toast from 'common/toast'
import './index.less'
```

## 引号

使用单引号,或者 es6 的反引号

```ts
const str = 'admin'
const str2 = `${str}`
```

## 缩进

使用两个空格

> .editorconfig

```
root = true

[*]
#缩进风格：空格
indent_style = space
#缩进大小2
indent_size = 2
#换行符lf
end_of_line = lf
#字符集utf-8
charset = utf-8
#是否删除行尾的空格
trim_trailing_whitespace = true
#是否在文件的最后插入一个空行
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

# Indentation override for js(x), ts(x) and vue files
[*.{js,jsx,ts,tsx,vue}]
indent_size = 2
indent_style = space

# Indentation override for css related files
[*.{css,styl,scss,less,sass}]
indent_size = 2
indent_style = space

# Indentation override for html files
[*.html]
indent_size = 2
indent_style = space

# Indentation override for config files
[*.{json,yml}]
indent_size = 2
indent_style = space

```

## 泛型工具


### Partial

Partial<> 作用是将传入的属性变为可选项.

```ts
interface iPeople {
  title: string
  name: string
}

const people: Partial<iPeople> = {
  title: 'Delete inactive users'
}
```

### Readonly

Readonly<> 作用是将传入的属性变为变成只读

```ts

interface iPeople {
    title: string;
    name: string;
}

const people: Readonly<Todo> = {
    title: 'todo list',
    name: chenfeng;
};
title name属性就是只读的了


```

### Required

Required<> 的作用是将传入的属性变为必选项

```ts
interface iPeople {
  title?: string
  name?: string
}

const people1: Props = { title: 'ts' } // OK

const people22: Required<iPeople> = { title: 'ts' } // Error: property 'name' missing
```

### Record<string,any>

会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型

```ts
type petsGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
    name:string,
    age:number,
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'dogName',
        age:2
    },
    cat:{
        name:'catName',
        age:3
    },
    fish:{
        name:'fishName',
        age:5
    }
}
```


### keyof

keyof 关键字，将一个类型映射为它所有成员名称的联合类型

```ts
interface iPeople {
  name: string
  age: number
}

type T = keyof iPeople // -> "name" | "age"
```

## for-in 中一定要有 hasOwnProperty 的判断（即禁止直接读取原型对象的属性）

```ts
//bad
const arr = []
const key = ''

for (key in obj) {
  arr.push(obj[key])
}

//good
const arr = []
const key = ''

for (key in obj) {
  if (obj.hasOwnProperty(key)) {
    arr.push(obj[key])
  }
}
```

## 第三方库函数的使用

用 try catch 包裹，防止第三方库的出现错误，导致整个程序崩溃

```ts
/*
 * Echart 用于代绘制图表，但当其自身发生错误时，可能影响到业务代码的执行
 */
// bad
const iniDom = document.getElementById('init-container')
const echartObj = echarts.init(iniDom)
this.setState(
  {
    echartObj
  },
  () => {
    const { echartObj } = this.state
    // 更新图表
    echartObj.setOption(CHART_CONFIG, true)
  }
)

// good
try {
  const iniDom = document.getElementById('init-container')
  const echartObj = echarts.init(iniDom)
  this.setState(
    {
      echartObj
    },
    () => {
      const { echartObj } = this.state
      // 更新图表
      echartObj.setOption(CHART_CONFIG, true)
    }
  )
} catch (error) {
  // TODO
}
```

## 减少魔法数字

写代码的时候尽量减少一些未知含义的数字，尽量用英文单词。例如 type === 0 的时候做了一些操作，让人不知所以然。

```ts
// bad
if (type !== 0) {
  // TODO
}

// good 多用类型
const STATUS: Record<string, any> = {
  READY: 0,
  FETCHING: 1,
  FAILED: 2
}

if (type === STATUS.READY) {
  // TODO
}

// best 多用枚举类型
enum STATUS {
  // 就绪
  READY = 0,
  // 请求中
  FETCHING = 1,
  // 请求失败
  FAILED = 2
}
```

## 其他

- 不要使用 var 声明变量
- 不会被修改的变量使用 const 声明
- 去除声明但未被引用的代码
- 禁止在代码里使用 debug
- 不允许有空的代码块
