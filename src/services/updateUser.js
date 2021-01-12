function updateUser( formData = {}) {
  const id = JSON.parse(localStorage.getItem("usuarioActual")).id
  // const API = `https://nodecrudsandersonapi.herokuapp.com/api/users//${id}`
  const API = `https://api-login-heroku.herokuapp.com/useredit/${id}`

  // const API = `http://localhost:4000/api/users/${id}`
  return fetch(API, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response =>{
      console.log(response)
      localStorage.setItem("usuarioActual", JSON.stringify(response.data));
      return response
    })
}

export default updateUser