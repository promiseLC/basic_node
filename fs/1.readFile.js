import fs from 'fs';
import fsP from 'fs/promises';

const fileUrl = './file/file.txt';

const syncData = fs.readFileSync(fileUrl, 'utf-8');

console.log(syncData);

// 异步写法
fs.readFile(fileUrl, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return 
  }
  console.log('========async========')
  console.log(data);
})



// promise形式 异步读取

fs.promises.readFile(fileUrl, 'utf-8').then((promisesData) => {
  console.log('========promises========')
  console.log(promisesData);
})

fsP.readFile(fileUrl, 'utf-8').then((promiseData) => {
  console.log('========promise other========')
  console.log(promiseData);
})

// 二进制读取

const buf = fs.readFileSync(fileUrl)
console.log('========buffer========')
console.log(buf);
console.log(buf.length);
buf.write('gg',buf.length-2)
console.log(buf.toString());
