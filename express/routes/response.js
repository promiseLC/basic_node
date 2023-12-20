import express from 'express';

// import img from '../../file/img/img.jpeg';


const router = express.Router();

router.post('/response/json', (req,res) => {
  res.json({
    name: "response",
    type:"json"
  })
})



router.get('/response/download', (req,res) => {
  res.download('../file/img/img.jpg', 'image.jpg', (err) => {
    if (err) {
      res.status(404).send('File not found'
      )
    }
  })
})

export default router;

