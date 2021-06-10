fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b19732b0')
  .then(res =>{
    if (res.ok){
      console.log('SUCCESS')
    }else {
      console.log('Not Successful')
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))