const myFetch = (url, data, method = "GET", callback = ()=>{}) => {
  const myHeaders = new Headers({ 
    'content-type': 'application/json',
    'content-length': data ? JSON.stringify(data).length.toString() : 0 
  })
  fetch(
    url, 
    {
      method: method,
      headers: myHeaders, 
      body: JSON.stringify(data)
    }
  )
  .then(r => r.json())
  .then(body => {
    // console.log('body', body)
    callback(body)
  })
  .catch(error => {
    console.error('error', error)
  })
}

export default myFetch