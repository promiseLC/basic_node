import child_process from 'child_process';

const { spawnSync } = child_process

function fetchSync  (url, options={}){
  const child = spawnSync(process.argv[0], [
    './_fetch-sync.js',
    JSON.stringify(url),
    JSON.stringify(options)
  ])

  // 子进程返回
  const result = child.stdout.toString();
  const responseDate = JSON.parse(result);
  return responseDate.body
}

console.log(1);

console.log(fetchSync('https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'));

console.log(2);
