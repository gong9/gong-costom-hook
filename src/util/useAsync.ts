/**
 * 较为优雅的处理异步
 * 1. 拿到异步处理得到的数据
 * 2. 捕捉异常
 * 3. 
 * @param promise
 * @return {data,status,error}
 */
import { useState, useCallback } from 'react';
interface UseAsyncParam<D> {
  data: D | null,
  error: Error | null,
  status: 'starting' | 'error' | 'success'
}
const defaultInitialState: UseAsyncParam<null> = {
  status: "starting",
  data: null,
  error: null,
};

const useAsync = <D>(initState?: UseAsyncParam<D>) => {

  const [value, setValue] = useState<UseAsyncParam<D>>({ ...defaultInitialState, ...initState })

  const setData = (res) => {
    setValue(
      {
        ...value,
        data: res
      })
  }

  const setError = (err) => {
    setValue(
      {
        ...value,
        data: err
      })
  }

  const setStatus = (status) => {
    setValue(
      {
        ...value,
        status: status
      })
  }

  const run = useCallback((promise) => {
    async (promise) => {
      setStatus('starting')
      if (promise.then) {
        try {
          await promise.then(res => setData(res))
          setStatus('success')
        } catch (error) {
          setError(error)
          setStatus('error')
        }
      } else {
        throw new Error("请传入 Promise 类型数据");
      }
    }
  }, [])

  return {
    status: value.status,
    data: value.data,
    error: value.error,
    run
  }
}

export default useAsync