function qualifiCation({formData}){
    const id = JSON.parse(localStorage.getItem("usuarioActual")).id
    const API = `https://api-login-heroku.herokuapp.com/comment/${id}`
    return fetch(API , {
        method: 'POST',
        body: formData
      })
    .then(res => res.json())
    .then(response => console.log(response.message))
}
export default qualifiCation