import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header><h1 className="center">Team Checker</h1></Header>
          <Home />
        </Route>
        <Route path="/team/:id">
          <TeamDetail></TeamDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
