function updateUser({jsonFile, id}) {
  // const id = JSON.parse(localStorage.getItem("usuarioActual")).id
  const API = `https://api-login-heroku.herokuapp.com/links/edit/${id}`
  // const API = `http://localhost:4000/links/edit/${id}`
  // debugger
  return fetch(API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonFile)
  })
    .then(res => res.json())
    .then(response =>{
      // console.log(response)
      return response
    })
}

export default updateUser