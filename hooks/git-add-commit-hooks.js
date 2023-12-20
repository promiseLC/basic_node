
import childProcess from 'child_process';


const {spawn, spawnSync } = childProcess;
console.log(1);
const msg = process.argv[2];

const spawnProcessAddAndCommit = () => {
  
  const add = spawnSync('git', ['add', '.'])
  
  spawnSync('git', ['commit', '-m', msg||'noMsg'])

}

spawnProcessAddAndCommit();