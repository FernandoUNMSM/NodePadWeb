import React, {useState} from 'react'

const FileContext = React.createContext({})

export function FileContextProvider ({children}) {
  const [fileContent,setFileContent] = useState({file:{nombre: ''}})

  return <FileContext.Provider value={{fileContent,setFileContent}}>
    {children}
  </FileContext.Provider>
}

export default FileContext