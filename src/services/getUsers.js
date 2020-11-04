function sendUser({ formData = {}, loader = false } = {}) {
  const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/login'
  // const API = 'http://localhost:4000/api/users/login'
  return fetch(API, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response =>{
      const validate = response.data
      loader = false
      return {validate, loader}
    })
}

export default sendUser