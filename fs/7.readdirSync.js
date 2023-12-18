import fs from 'fs';

const files = fs.readdirSync('./file');
console.log(files);

const files_with_type = fs.readdirSync('./file', { withFileTypes: true })

console.log(files_with_type);

console.log('================')

// f.isDirectory() === true 代表文件夹 
console.log(files_with_type.map((f) => {
  return {name:f.name,isDirectory:f.isDirectory()}
}));