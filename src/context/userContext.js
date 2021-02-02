import React, { useState, useEffect } from 'react'

const UserContext = React.createContext({})

export function UserContextProvider({ children }) {
  const user = JSON.parse(localStorage.getItem("usuarioActual"));

  const [imageA, setImageA] = useState(null)

  useEffect(() => {
    if (user !== '{}' && user !== null) {
      setImageA(user.image)
    }
  }, [])
  return <UserContext.Provider value={{ imageA, setImageA }} >
    {children}
  </UserContext.Provider>
}

export default UserContext