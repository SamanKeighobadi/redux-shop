import {Route,Switch} from 'react-router-dom'
// MainLayout 
import MainLayout from './components/layouts/MainLayout';
// Import components
import AppContainer from "./components/containers/AppContainer";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AppCart from './components/Cart/AppCart';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={AppContainer} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cart" component={AppCart} />
        <Route path="/product/:productId" component={ProductDetails} />
      </Switch>
    </MainLayout>
  )
}
export default App;
