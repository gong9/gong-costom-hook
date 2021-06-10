import { Store } from 'overstated'

class Test01Store extends Store {
  state: {
    name: 'gxb'
  }
  setName = () => {
    return this.setState(state => ({ name: 'zs' }))
  }
}
export default Test01Store