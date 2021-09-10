import {Route,Switch} from 'react-router-dom'
// Import components
import AppContainer from "./components/containers/AppContainer";
// MainLayout 
import MainLayout from './components/layouts/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={AppContainer} />
        <Route path="/login" render={() => (<h3>login</h3>)} />
        <Route path="/register" render={() => (<h3>register page</h3>)} />
      </Switch>
    </MainLayout>
  )
}
export default App;
