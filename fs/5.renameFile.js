
import fs from 'fs';


// 移动重命名文件 renameSync

console.log('========renameSync========')

// 重命名
fs.renameSync('./file/file_rename11.txt', './file/file_rename22.txt')
// 移动
fs.renameSync('./file/file_rename22.txt','./file_rename22.txt')
