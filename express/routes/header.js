import express from 'express';

const router = express.Router();



router.get('/response/get/header', (req, res) => {

  res.json(req.headers)
})


router.get('/response/set/header', (req, res) => {

  res.setHeader('Content-Type','text/html')
  res.setHeader('token','112233')
  res.send('<h1>set Header</h1>')
})


export default router;