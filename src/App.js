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
import UserModel from './model/User/UserModel';
import { useState } from 'react';

function App() {
  const [activeUser, setActiveUser] = useState(UserModel.loadActiveUser());
  const [preferences, setPreferences] = useState(null);
  const [planData, setPlanData] = useState(null);

  function handleLogout() {
    setActiveUser(null);
    UserModel.logout();
  }

  return (
    <div className="App">
      <FitnessNavbar activeUser={activeUser} onLogout={handleLogout}/>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/login"><LoginPage activeUser={activeUser} onLogin={user => setActiveUser(user)}/></Route>
          <Route exact path="/customize"><CustomizePage activeUser={activeUser} onSubmit={setPreferences}/></Route>
          <Route exact path="/plan"><PlanPage preferences={preferences} activeUser={activeUser} onPlay={setPlanData}/></Route>
          <Route exact path="/player"><PlayerPage planData={planData} activeUser={activeUser}/></Route>
          <Route exact path="/workouts"><WorkoutsPage activeUser={activeUser} onPlay={setPlanData}/></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
