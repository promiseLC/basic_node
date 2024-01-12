import express from 'express';

export default function mountMiddleware(app) {
  

  app.use(express.static('./public'))

  // 解析body
  app.use(express.json());

  app.use((req, res, next) => {

    const { method, path, query, body, headers } = req
    console.log(`[${method}] ${path}`)
    console.log('query:', query)
    console.log('headers:', headers)
    console.log('body:', body)
    next()

  })

}