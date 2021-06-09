import * as React from 'react';
import { Provider } from 'overstated'
import Test01 from './componment/Test01'
export interface OverStatedProps {

}

const OverStated: React.FC<OverStatedProps> = () => {

  return (
    <Provider>
      <Test01/>
    </Provider>
  );
}

export default OverStated;