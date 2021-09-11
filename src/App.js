import {Route,Switch} from 'react-router-dom'
// MainLayout 
import MainLayout from './components/layouts/MainLayout';
// Import components
import AppContainer from "./components/containers/AppContainer";
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={AppContainer} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </MainLayout>
  )
}
export default App;
