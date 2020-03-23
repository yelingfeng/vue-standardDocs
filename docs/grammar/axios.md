<!--
 * @Author: renxiaofan
 * @Date: 2020-03-21 23:22:21
 * @LastEditors: renxiaofan
 * @LastEditTime: 2020-03-23 12:40:47
 * @Description: 
 -->
# axios

## 使用



```ts 
// 通用 IResponse类型
interface IResponse<T = any> {
  code: number
  data?: T
  message: string
}

```


iBiz 为`IResponse` 业务类型 `T`
```ts
import { http } from '@/common/request'


interface IBiz {
  name : string,
  age : number
}

// get
http<IBiz>.get('/demo/getData').then(resp => {
   const bizData = resp.data
   console.log(bizData)
})


```
