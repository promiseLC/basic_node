import childProcess from 'child_process';

const { spawn, spawnSync } = childProcess

// 个人理解 开启一个子进程 spawn可以执行 命令

const pwd = spawnSync('pwd')

console.log(pwd.stdout.toString());

const ls = spawnSync('ls', ['-lh'])

console.log(ls.stdout.toString());


const fileUrl = 'buffer.js'

// 执行 git log -1 --pretty="%ci" ../fs/index.mjs
const spawnProcess = spawn('git',['log','-1','--pretty="%ci"',fileUrl])

spawnProcess.stdout.on('data', (data) => {
  console.log(`stdout${data}`);
  console.log(new Date(data));
})


const spawnProcessAddAndCommit = () => {
  
  const add = spawnSync('git', ['add', '.'])
  

  spawnSync('git', ['commit', '-m', '脚本提交2'])
  
  const log = spawn('git', ['log']) 
  
  log.stdout.on('data', (data) => {
    console.log(data.toString());
  })

}

spawnProcessAddAndCommit();