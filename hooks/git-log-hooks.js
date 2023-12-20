import childProcess from 'child_process';

const { exec , execSync} = childProcess;


const execProcess = exec('git log');

execProcess.stdout.on('data', (data) => {
  console.log(data);
})