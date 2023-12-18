import fs from 'fs';


// 创建目录

fs.mkdirSync('test-dir/a/b/v/b', { recursive: true })



// 删除目录
setTimeout(() => {
  console.log('执行');
  fs.rmSync('./test-dir',{recursive:true})
}, 3000);
