import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CustomizePage from './pages/CustomizePage/CustomizePage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import PlanPage from './pages/PlanPage/PlanPage';
import PlayerPage from './pages/PlayerPage/PlayerPage';
import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import FitnessNavbar from './components/FitnessNavbar/FitnessNavbar';

function App() {
  return (
    <div className="App">
      <FitnessNavbar/>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/login"><LoginPage/></Route>
          <Route exact path="/customize"><CustomizePage/></Route>
          <Route exact path="/plan"><PlanPage/></Route>
          <Route exact path="/player"><PlayerPage/></Route>
          <Route exact path="/workouts"><WorkoutsPage/></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
