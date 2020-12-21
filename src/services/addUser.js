function aadUser({ formData = {}, loader = false } = {}) {
  // const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/'
  // const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/'
  const API = 'https://api-login-heroku.herokuapp.com/signup'
  // const API = 'http://localhost:4000/signup'
  return fetch(API, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response => {
      console.log(response)
      localStorage.setItem("usuarioActual", JSON.stringify(response.data));
      return response.message
    })
}

export default aadUser