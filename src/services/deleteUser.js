function validPassword() {
  const id = JSON.parse(localStorage.getItem("usuarioActual")).id
  // const API = `https://api-login-heroku.herokuapp.com/deleteuser/${id}`
  const API = `http://localhost:4000/deleteuser/${id}`
  // const API = 'http://localhost:4000/links/add'
  return fetch(API)
    .then(res => res.json())
    .then(response => response.message)
}

export default validPassword