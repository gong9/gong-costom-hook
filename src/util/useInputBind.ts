/**
 * input 双向绑定
 * @params initstate:string
 * @return {state,setState}
 */
import React, { useState } from 'react';

interface Res {
  value: number | string,
  onChange: (arg: React.ChangeEvent<HTMLElement>) => void
}

const useInputBind = (initstate?: number | string): Res => {

  const [value, setValue] = useState(initstate || '')
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  
  return { value, onChange }
}

export default useInputBind