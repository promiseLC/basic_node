import express from 'express';

const router = express.Router();

router.all('/user', (req, res) => {
  
  const { method } = req;
  res.send(`${method} router request`)
})


export default router;