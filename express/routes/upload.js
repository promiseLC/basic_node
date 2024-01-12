import express from 'express';

import multer from 'multer';

import fs from 'fs';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dir = './uploads';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })

    }
    cb(null,'./uploads')
  },
  filename(req, file, cb) {
    const ext = file.originalname.split('.').pop()
    cb(null,`${Date.now()}-${file.fieldname}.${ext}`)
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize:1024*1024*5
  },
  fileFilter(req, file, cb) {
    if (!file.mimetype.startsWith('image/')) {
      const err = new Error('Only image files are allowed!')
      err.status = 400
      return cb(err,false)
    }

    return cb(null,true)
  }
})

router.post('/upload/image', upload.single('file'), (req, res) => {
  res.json({message:'文件上传成功',data:req.file})
})

export default router;