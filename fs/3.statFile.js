import fs from 'fs';
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