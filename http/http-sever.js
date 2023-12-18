import http from 'http';

// 创建一个服务 使用http.createServer


const server = http.createServer((req, res) => {

  // 请求方法和请求url
  const { method, url } = req;
  
  console.log(method,url);


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text.html');
  res.setHeader('Content-Type1', '1');
  res.end('<h1>Hello,World!</h1>');
})

server.listen(4275, () => {
  console.log('Server running at http://127.0.0.1:4275');
})

// request 和 response

