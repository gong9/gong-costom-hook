import * as React from 'react';
import ReactDOM from 'react-dom'
import { useEffect, useRef } from 'react'
const WrapComponent = ({ children }) => {

  const testRef = useRef(null)

  useEffect(() => {
    ReactDOM.createPortal(children, testRef.current)
  })

  return (
    <div className='test' ref={testRef}>test</div>
  )

}
export default WrapComponent