# cookie-js
一个简洁的js前端cookie指令封装

## 快速引入

### <法一>网页内调用
```html
<script>https://cdn.yimian.xyz/cookie-js/cookie-js.min.js</script>
```

### <法二>依赖包引入

**npm**
```shell
npm i cookie-js2 --save
```

**bower**
```shell
bower i cookie-js2 --save
```


## 食用方法
`cookie.set(key, val, days)`: 设置cookie, 键名key, 键值val, 保留时间days(可选，默认10年) 
`cookie.get(key)`: 读取cookie, 根据键名key  
`cookie.del(key)`: 删除cookie, 根据键名key  

## 示例
```js
//设置名为iotcat的cookie，值为hero，时长30天
cookie.set("iotcat", "hero", 30);

//提取iotcat的值
alert(cookie.get("iotcat"));

//删除iotcat的cookie
cookie.del("iotcat");
```

## CDN
中国大陆: `https://cdn.yimian.xyz/cookie-js/cookie-js.min.js`

## License
MIT
