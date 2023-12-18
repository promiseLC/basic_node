import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);

console.log(__filename);

const __dirname = dirname(__filename);

console.log(__dirname);

// join 拼接传入的路径 按参数 顺序
console.log(path.join('a','b','c'));  // a/b/c
console.log(path.join(process.cwd(), '/hello', 'a.js')); // /Users/liuchao/Desktop/basic/node/hello/a.js

// resolve  将多个路径拼接成一个绝对路径,返回一个解析后的绝对路径
// 1.如果传入相对路径,会以当前工作目录为基准,计算绝对路径,如果传入绝对路径,则以绝对路径为基准

console.log(path.resolve('a', 'b', 'c')); // /Users/liuchao/Desktop/basic/node/a/b/c

console.log(path.resolve('hello', 'world', './a', 'b')); // /Users/liuchao/Desktop/basic/node/hello/world/a/b

console.log(path.resolve(__dirname,'1.js'));

console.log('=== path.dirname ===')  // 默认少返回一个层级 
console.log(path.dirname(process.cwd()))  // /Users/liuchao/Desktop/basic
console.log(path.dirname('/a/b/c'))  // /a/

/** 
 *
===== path.parse=====
{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// path.parse 解析路径
console.log('===== path.parse=====');
console.log(path.parse('/home/user/dir/file.txt'));


// path.sep   返回系统路径分隔符 

console.log(path.sep);   // windows ===> \  mac ===> /

// sep 用来拼接路径
const dir = 'users'
const file = 'index.html'
console.log(dir + path.sep + file) // users/index.html


// 也可以使用join来拼接路径 

const joinPath = path.join(dir, file)

console.log(joinPath); // users/index.html


