function validPassword({formData}) {
  const id = JSON.parse(localStorage.getItem("usuarioActual")).id
  const API = `https://api-login-heroku.herokuapp.com/updatepassword/${id}`
  // const API = `http://localhost:4000/updatepassword/${id}`
  // const API = 'http://localhost:4000/links/add'
  return fetch(API, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response => response)
}

export default validPassword