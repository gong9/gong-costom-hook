import * as React from 'react';
import { useState, useCallback } from 'react'
import Model from './model'
export interface ModelConProps {

}

const ModelCon: React.FC<ModelConProps> = () => {
  const [show, setShow] = useState(false)
  const setStatus = useCallback(() => setShow(!show), [])
  return (
    <div>
      <button onClick={setStatus}>示例 </button>
      <Model show={show} ></Model>
    </div>
  );
}

export default ModelCon;