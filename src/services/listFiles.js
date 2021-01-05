// function sendFile({leng}) {
function sendFile({leng, id}) {
  const API = 'https://api-login-heroku.herokuapp.com/links/list'
  // const API = 'http://localhost:4000/links/list'
  return fetch(API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({tipo: leng})
    body: JSON.stringify({tipo: leng, id: id})
  })
    .then(res => res.json())
    .then(response => response)
}

export default sendFile