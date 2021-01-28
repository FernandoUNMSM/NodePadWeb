import React, {useState, useEffect} from 'react'

const UserContext = React.createContext({})

export function UserContextProvider ({children}) {
  const [imageA,setImageA] = useState(JSON.parse(localStorage.getItem("usuarioActual")).image)

  // useEffect(() =>{
  //   console.log(imageA)
  // },[imageA])
  return <UserContext.Provider value={{imageA,setImageA}} >
    {children}
  </UserContext.Provider>
}

export default UserContext