import React, { useState, useEffect } from 'react'
import listFiles from '../services/listFiles'

function useGetListFiles({ leng }) {
  // console.log(leng)
  const [list, setList] = useState([])
  useEffect(() => {
    listFiles({ leng: leng })
      .then(res => {
        setList(res.data)
      })
  },[])

  return list
}
export default useGetListFiles