function aadUser({ formData = {}, loader = false } = {}) {

  const API = 'https://api-login-heroku.herokuapp.com/signup'
  // const API = 'http://localhost:4000/signup'

  return fetch(API, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response => {
      // console.log(response)
      const mensaje = response.message
      const user = response.data
      setConfig(response.config)
      // localStorage.setItem("usuarioActual", JSON.stringify(response.data));
      return { mensaje, user }
    })
}

export default aadUser


const setConfig = (config) => {
  localStorage.setItem("configActual", JSON.stringify(config));
}
