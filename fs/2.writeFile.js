import fs from 'fs';


fs.writeFileSync('./file/fs_write.txt', 'hel1 1122');


// 读取一个图片写入到另一个文件
const imgBuf = fs.readFileSync('./file/img/img.jpeg');

console.log('isBuffer', Buffer.isBuffer(imgBuf), 'bufferSize', imgBuf.length);

// 写入到img文件夹中新图片

/**
 * 1. 路径
 * 2. 内容
 * 3. 格式
 */
fs.writeFileSync('./file/img/newImg1.jpeg', imgBuf, 'binary');