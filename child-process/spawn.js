import childProcess from 'child_process';

const { spawn, spawnSync } = childProcess


const pwd = spawnSync('pwd')

console.log(pwd.stdout.toString());

const ls = spawnSync('ls', ['-lh'])

console.log(ls.stdout.toString());