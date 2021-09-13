
import { Switch, Route, Redirect } from 'react-router-dom'
import MoviesDetails from './screens/MoviesDetails';
import AddNewOne from './screens/AddNewOne';
import Layouts from './components/Layouts/Layouts';

function App() {
  return (
    <Layouts>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/movies' />
        </Route>
        <Route path='/movies'>
          <MoviesDetails />
        </Route>
        <Route path='/new-movies'>
          <AddNewOne />
        </Route>
      </Switch>
    </Layouts>
  );
}

export default App;

