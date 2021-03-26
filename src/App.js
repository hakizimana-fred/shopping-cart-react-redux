import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Route, Switch } from 'react-router-dom'
import { Cart } from './components/Cart'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </>
  );
}

export default App;
