function updateUser( formData = {}) {
  // const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/login'
  const id = JSON.parse(localStorage.getItem("usuarioActual"))._id
  console.log(id)
  const API = `http://localhost:4000/api/users/${id}`
  return fetch(API, {
    method: 'PUT',
    body: formData
  })
    .then(res => res.json())
    .then(response =>{
      localStorage.setItem("usuarioActual", JSON.stringify(response.data));

      // localStorage.setItem("usuarioActual", JSON.stringify(response.data));
      // // console.log(response.data.validate);
      // const validate = response.data.valid
      // loader = false
      return response
    })
}

export default updateUser