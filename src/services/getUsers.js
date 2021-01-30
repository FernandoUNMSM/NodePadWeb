function sendUser({ formData = {}, loader = false } = {}) {
  // const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/login'
  const API = 'https://api-login-heroku.herokuapp.com/signin'
  // const API = 'http://localhost:4000/signin'
  return fetch(API, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response =>{
      const user = response.data;
      const mensaje = response.message;
      const preferences = response.preferences
      console.log(preferences);
      // console.log(response);
      // localStorage.setItem("usuarioActual", JSON.stringify(response.data));
      // console.log(response.data.validate);
      const validate = response.valid
      loader = false
      return {validate, loader, user, mensaje}
    })
}

export default sendUser