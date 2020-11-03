function sendUser({ formData = {} } = {}) {
  const API = 'https://nodecrudsandersonapi.herokuapp.com/api/users/'
  return fetch(API, {
    method: 'POST',
    body: formData,
  })
    .then(res => res.json())
    .then(response => console.log(response))
}
export default sendUser