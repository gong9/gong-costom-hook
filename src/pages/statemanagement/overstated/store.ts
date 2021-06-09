import { Store } from 'overstated';

class CounterStore extends Store<{ value: number }> {
  state = {
    value: 0
  }
  increment = () => {
    return this.setState(state => ({ value: state.value + 1 }));
  }
  decrement = () => {
    return this.setState(state => ({ value: state.value - 1 }));
  }
}
export default CounterStore