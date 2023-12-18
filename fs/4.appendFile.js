import fs from 'fs';

const fileUrl = './file/file1.txt';
// 追加输出 appendFileSync 向文件末尾追加写入内容

/**
 * 1. 指定文件路径
 * 2. 追加内容
 * 文件路径不存在会自定创建
 */

console.log('========追加内容========')
fs.appendFileSync('./file/file1.txt', 'Hello World2LC');

console.log(fs.readFileSync(fileUrl, 'utf-8'));