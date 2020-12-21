function sendFile({jsonFile}) {
  // const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/'
  // const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/'
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
      // localStorage.setItem("usuarioActual", JSON.stringify(response.data));
      // return response.message
    })
}

export default sendFile