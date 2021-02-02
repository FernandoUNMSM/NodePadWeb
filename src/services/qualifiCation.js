function qualifiCation(){
    const id = JSON.parse(localStorage.getItem("usuarioActual")).id
    const API = `https://api-login-heroku.herokuapp.com/qualifiCation/${id}`
    return fetch(API)
    .then(res => res.json())
    .then(response => response.message)
}
export default qualifiCation