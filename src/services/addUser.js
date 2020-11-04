function aadUser({ formData = {}, loader = false } = {}) {
  // const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/'
  const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/'
  // const API = 'http://localhost:4000/api/users/'
  return fetch(API, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response =>{
      console.log(response)
      // const validate = response.data
      // loader = false
      // return {validate, loader}
      // return validate
    })
}

export default aadUser