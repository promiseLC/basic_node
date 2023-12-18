
import childProcess from 'child_process';


const {spawn, spawnSync } = childProcess;

const msg = process.argv[2];

const spawnProcessAddAndCommit = () => {
  
  const add = spawnSync('git', ['add', '.'])
  
  spawnSync('git', ['commit', '-m', msg])
  
  const log = spawn('git', ['log']) 
  
  log.stdout.on('data', (data) => {
    console.log(data.toString());
  })

}

spawnProcessAddAndCommit();