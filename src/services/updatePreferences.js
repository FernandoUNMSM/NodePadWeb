
function updatePreferences() {
  const preferences = JSON.parse(localStorage.getItem('configActual'));
  const {id} = JSON.parse(localStorage.getItem('usuarioActual'));

  const API = `https://api-login-heroku.herokuapp.com/userpreferences/${id}`
  // const API = `http://localhost:4000/userpreferences/${id}`
  // console.log(preferences)
  return fetch(API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(preferences),
  })
    .then(res => res.json())
    .then(response =>{
    })
}

export default updatePreferences