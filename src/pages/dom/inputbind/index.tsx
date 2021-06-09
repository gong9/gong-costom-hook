import * as React from 'react';
import useInputBind from '../../../util/useInputBind'
export interface InputBindProps {

}

const InputBind: React.FC<InputBindProps> = () => {
  const { value,onChange } = useInputBind('这是一个默认值')
  
  return (
    <>
      <div> {value}</div>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
}

export default InputBind;