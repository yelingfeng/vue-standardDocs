# axios

## 使用

```ts
import { http } from '@/common/request'


// get
http.get('/demo/getData').then(resp => {
  console.log(resp)
})

const paramData = {
    id : 1,
    name : 'user
}
// post
http.post('xxx/xxx',paramData).then(resp=>{

})
```
