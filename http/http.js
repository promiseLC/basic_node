import https from 'https';
import http from 'http';

// 请求根据协议去变化

// 获取掘金首页文章榜单

https.get('https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0', (res) => {
  let content = ''

  res.on('data', (chunk) => {
    content += chunk;
  })

  res.on('end', () => {
    // console.log(content);
    console.log('++++++++res++++++++')
  })

  res.on('error',(err)=>{console.log(err);})
})


// 添加参数及另外一种写法

const req = https.get('https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0', {
  headers: {
  'Content-Type':'application/json'
  }
})

req.on('response', (res) => {
  // 响应内容拼接
  let content = '';

  res.on('data', (chunk) => {
    content += chunk;
  })

  res.on('end', () => {
    console.log('========req========')
    // console.log(content);
  })

  res.on('error',(err)=>{console.log(err);})
  
})





// http.request

const url = new URL('https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0')

console.log(url);
// URL {
//   href: 'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
//   origin: 'https://api.juejin.cn',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'api.juejin.cn',
//   hostname: 'api.juejin.cn',
//   port: '',
//   pathname: '/content_api/v1/content/article_rank',
//   search: '?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
//   searchParams: URLSearchParams {
//     'category_id' => '1',
//     'type' => 'hot',
//     'count' => '3',
//     'from' => '1',
//     'aid' => '2608',
//     'uuid' => '7145810834685003271',
//     'spider' => '0' },
//   hash: ''
// }

const reqC = https.request({
  method: 'GET',
   // http 80 https 443
  port: 443,
  hostname: url.hostname,
  path:url.pathname+url.search
}, (res) => {
  let content = ''
  res.on('data', (chunk) => {
    content+=chunk
  })

  res.on('end', () => {
    console.log('statusCode', res.statusCode)
      console.log(content)
  })

}) 


// 发送请求
reqC.end();