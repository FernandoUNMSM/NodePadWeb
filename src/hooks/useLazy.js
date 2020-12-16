import React, { useState, useEffect } from 'react'

export default function useLazy({ distance = '100px', fromRef = ''} = {}) {
  // console.log(distance)
  const [isIntersected, setShow] = useState(false)

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })
    observer.observe(fromRef.current)

    return () => observer.disconnect()
  })
  // console.log(isIntersected)
  return isIntersected
}

