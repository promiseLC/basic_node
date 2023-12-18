
const buf = Buffer.alloc(10);

const buf1 = Buffer.from('Hello word')

const buf2 = Buffer.from([0x68,0x65])

console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf1); // <Buffer 48 65 6c 6c 6f 20 77 6f 72 64>
console.log(buf2); //  <Buffer 68 65>
console.log(buf1.toString()); // Hello word

// 写入内容

buf.write('hello')
console.log(buf); // <Buffer 68 65 6c 6c 6f 00 00 00 00 00>

// 从第5位开始写 , 并且 world是5位 正好写入 如果是更多 只会写入 5位
buf.write('world', 5); 
console.log(buf); // <Buffer 68 65 6c 6c 6f 77 6f 72 6c 64>

console.log(buf.toString()); // helloworld

// 截取
const sliceBuf = buf.slice(0, 5);

console.log(sliceBuf.toString()); // hello