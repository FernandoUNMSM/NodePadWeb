function sendFile({jsonFile}) {
  const API = 'https://api-login-heroku.herokuapp.com/links/add'
  // const API = 'http://localhost:4000/links/add'
  return fetch(API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonFile)
  })
    .then(res => res.json())
    .then(response => {
      console.log(response)
    })
}

export default sendFile