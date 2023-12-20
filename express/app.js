import express from 'express';
import method from './routes/method.js'
import user from './routes/router-demo.js'
import response from './routes/response.js';


const PORT = 3029;

const app = express();


app.use(express.json())

app.use((req, res, next) => {
  const { method, path,query,body,headers } = req
  next()
})


app.get('/hello/:id', (req,res) => {
  const { params } = req;

  res.json(params)
})

app.use(user)

// 模块 会把 /action 拼接到 user模块路由之前
app.use('/action',user)


method(app)


app.use(response);


// app route 一个路由处理多个不同方式请求
app.route('/auth').all((req,res,next) => {
  
  console.log(`pre all`, req, res);
  
  next();

}).get((req, res) => {
  res.send('auth get')
}).post((req,res) => {
    res.send('auth post')
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})