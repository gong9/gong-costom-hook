import { divide } from 'lodash';
import * as React from 'react';
import { useEffect } from 'react'
import useAsync from '../../../util/useAsync'
export interface handleAsyncProps {

}

const HandleAsync: React.FC<handleAsyncProps> = () => {
  const { run, ...res } = useAsync()
  
  
  useEffect(() => {
    run(new Promise((res, rej) => {
      res('测试数据')
    }))
  }, [])
  console.log(res);
  
  return (
    <>
      {res.status === status ? (<div>加载中...</div>) : (<div>{res.data}</div>)}
    </>
  );
}

export default HandleAsync;