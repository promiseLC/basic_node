// 获取指定目录下所有文件绝对路径

import fs from 'fs';
import path,{ dirname } from 'path';
import { fileURLToPath } from 'url';


const filename = fileURLToPath(import.meta.url)
const __dirname = dirname(filename);


function getAllFiles(dirPath,arrayOfFiles) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true })

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    // isDirectory true 代表文件夹
    if (file.isDirectory()) {
      arrayOfFiles = getAllFiles(path.resolve(dirPath, file.name), arrayOfFiles); 
    } else {
      arrayOfFiles.push(path.resolve(dirPath,file.name))
    }
  })


  return arrayOfFiles
}

console.log(getAllFiles('./file',[]));