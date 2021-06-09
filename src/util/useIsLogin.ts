/**
 * 是否是登录态
 * @params 无
 * @return true or false
 */
import { useState } from 'react'
const useIsLogin = (): boolean => {
  const [status, setStatus] = useState(false)

  return status
}

// const checkIsLogin=()=>{
//   if(localStorage.getItem('token'))
// }