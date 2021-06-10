import * as React from 'react';
import WrapComponent from '../../../hoc/index'

export interface ModelProps {
  show: boolean,
}

const Model: React.FC<ModelProps> = () => {
  return (
    <WrapComponent>
      <div>这是一个模态框</div>
    </WrapComponent>

  );
}

export default Model;