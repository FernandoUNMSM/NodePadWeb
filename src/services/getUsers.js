function sendUser({ formData = {}, loader = false } = {}) {
  // const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/login'
  const API = 'http://localhost:4000/api/users/login'
  return fetch(API, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response =>{
      localStorage.setItem("usuarioActual", JSON.stringify(response.data.validate[0]));
      // console.log(response.data.validate);
      const validate = response.data.valid
      loader = false
      return {validate, loader}
    })
}

export default sendUser