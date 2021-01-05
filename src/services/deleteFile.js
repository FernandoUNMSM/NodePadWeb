// function sendFile({leng}) {
function deleteFile({ leng, id }) {
  const API = `https://api-login-heroku.herokuapp.com/links/delete/${id}`
  // const API = 'http://localhost:4000/links/list'
  return fetch(API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({tipo: leng})
    body: JSON.stringify({ tipo: leng})
  })
    .then(res => res.json())
    .then(response => response)
}

export default deleteFile