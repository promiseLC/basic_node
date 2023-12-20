import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
})

// 对话
rl.question('What is your name?', (name) => {
  console.log(`Hello, ${name}`);

  rl.question('age', (age) => {
    console.log(`you age, ${age}`); 
  rl.close();
  })


})


// 设置提示符
// rl.setPrompt('请输入>');
// rl.prompt();

// // 监听行命令
// rl.on('line', (line) => {
  
//   switch (
//   line.trim()
//   ) {
//     case 'hello':
//       console.log('world');
//       break;

//       case 'exit':
//       rl.close();
//       break;

//       default:
//       console.log('say what?');
//       break;
//   }

//   rl.prompt();

// })

// rl.on('close', () => {
//   console.log('GoodBye!');

//   process.exit(0);
// })