import { file } from 'jszip'
import React, {useState, useEffect} from 'react'

const FileContext = React.createContext({})

export function FileContextProvider ({children}) {
  const [fileContent,setFileContent] = useState('{}')

  // useEffect(()=>{
  //   console.log(fileContent)
  // },[fileContent])

  return <FileContext.Provider value={{fileContent,setFileContent}}>
    {children}
  </FileContext.Provider>
}

export default FileContext