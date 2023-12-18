import fs from 'fs';

// 删除文件
// fs.unlinkSync('./file/file1.txt');  
// fs.rmSync('test-dir/test2.txt')  效果同上


/**
 * unlinkSync 删除文件
 * rmSync 可以删除文件或文件夹
 */


// 删除文件夹
fs.writeFileSync('./remove.txt', 'hello world');

console.log(fs.readFileSync('./remove.txt', 'utf-8'));

fs.unlinkSync('./remove.txt');


// 创建文件夹
fs.mkdirSync('./remove');

// 删除文件夹 需要加 {recursive:true}
fs.rmSync('./remove',{recursive:true});