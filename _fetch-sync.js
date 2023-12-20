
if (process.argv.length === 4) {

  const url = JSON.parse(process.argv[2])

  const options = JSON.parse(process.argv[3])

  fetch(url, options).then(async (response) => {
    
    const result = {
      status: response.status,
      body:await response.json()
    }
    debugger;
    console.log(JSON.stringify(result));

  })



}