import * as React from 'react';
import { useStore } from 'overstated'
import CounterStore from '../store'
export interface Test01Props {

}

const Test01: React.FC<Test01Props> = () => {
  const { value, add } = useStore(CounterStore, (store) => ({ value: store.state.value, add: store.increment }))

  return (
    <>
      <div>{value}</div>
      <button onClick={add}>add</button>
    </>
  );
}

export default Test01;