import React, {useState, useEffect} from 'react'

const UserContext = React.createContext({})

export function UserContextProvider ({children}) {
  const [usuario,setUsuario] = useState(null)
  const [config,setConfig] = useState(null)

  // useEffect(() =>{
  //   console.log(usuario)
  // },[usuario])
  return <UserContext.Provider value={{usuario,setUsuario,config,setConfig}}>
    {children}
  </UserContext.Provider>
}

export default UserContext