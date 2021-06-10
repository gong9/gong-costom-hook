/**
 * 拿token数据,现在有点封装错了,应该基于useAsync搞
 * @params 键值 key
 * @return {value,boolean表示是否获取成功}
 */

import { useState } from 'react'

interface LocalStorageRes {
  data: any,
  status: boolean,
  error: Error
}

const defaultInitialState: LocalStorageRes = {
  data: null,
  status: false,
  error: null
}

const useLocalStorage = (key: string): LocalStorageRes => {
  const [value, setValue] = useState({ ...defaultInitialState })
  if (!key) throw new Error("i need key");

  const getData = async () => {
    try {
      setValue({
        data: await localStorage.getItem(key),
        status: true,
        error: null
      })
    } catch (error) {
      setValue({
        data: null,
        status: false,
        error: error
      })
    }
  }
  return value
}
export default useLocalStorage