// fs 文件读写模块

/**
 * 1. readFile
 * 2. writeFile
 * 3. statSync
 * 4. appendFileSync
 * 5. renameSync
 * 6. unlinkSync
 * 7. rmSync
 * 8. readDirSync
 * 9. mkdirSync
 * 10.rmdirSync
 * 11.watch
 * 12.
 */

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

// +++++++写入文件+++++++

fs.writeFileSync('./file/fs_write.txt', 'hello world');


// 读取一个图片写入到另一个文件
const imgBuf = fs.readFileSync('./file/img/img.jpeg');

console.log('isBuffer', Buffer.isBuffer(imgBuf), 'bufferSize', imgBuf.length);

// 写入到img文件夹中新图片

/**
 * 1. 路径
 * 2. 内容
 * 3. 格式
 */
fs.writeFileSync('./file/img/newImg.jpeg', imgBuf, 'binary');

// ++++++++statSync 查看文件或文件夹信息+++++++++
console.log('========statSync========')
const fileStat = fs.statSync(fileUrl);

console.log(fileStat);
const dirStat = fs.statSync('./file');
console.log(dirStat);

/**
 * Stats {
  dev: 16777234, // 设备id
  mode: 16877,  // 文件权限 读写执行等
  nlink: 6,  // 硬链接数
  uid: 501,  // 用户id
  gid: 20,  // 组id
  rdev: 0,  // 设备类型
  blksize: 4096, // 块大小
  ino: 46135885,  // inode号,表示该文件inode编号
  size: 192,   // 文件大小
  blocks: 0,  // 该文件占用总块数
  atimeMs: 1702609906082.725, // 最后访问时间
  mtimeMs: 1702609906054.013,  // 最后修改时间
  ctimeMs: 1702609906054.013,  // 最后状态变更时间
  birthtimeMs: 1702554765078.109,  // 创建时间
  atime: 2023-12-15T03:11:46.083Z, // 格式化之后的 最后访问时间
  mtime: 2023-12-15T03:11:46.054Z,  // 格式化之后的最后修改时间
  ctime: 2023-12-15T03:11:46.054Z, // 格式化之后的最后访问时间
  birthtime: 2023-12-14T11:52:45.078Z // 格式化之后的最后创建时间
}
 */

//  stat 返回的信息还包含一些调用函数

// 判断是文件还是文件夹
console.log(fileStat.isFile());

console.log(dirStat.isDirectory());

// 查询一个不存在的文件路径会报错,需要自己捕获

try {
  fs.statSync('./file11')
} catch (error) {
    console.log('文件不存在');
}


// 追加输出 appendFileSync 向文件末尾追加写入内容

/**
 * 1. 指定文件路径
 * 2. 追加内容
 * 文件路径不存在会自定创建
 */

console.log('========追加内容========')
fs.appendFileSync('./file/file1.txt', 'Hello World2');

console.log(fs.readFileSync(fileUrl, 'utf-8'));

// 移动重命名文件 renameSync

console.log('========renameSync========')

// 重命名
fs.renameSync('./file/file_rename.txt', './file/file1.txt')
// 移动
fs.renameSync('./file/file_rename11.txt','./file_rename22.txt')


