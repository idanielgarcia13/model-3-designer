import './App.css';
import './sections.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Car from './sections/Car';
import Exterior from './sections/Exterior';
import Interior from './sections/Interior';
import Autopilot from './sections/Autopilot';
import Payment from './sections/Payment';

const App = () => {
  return (
    <Router>
      <div className="mainTopWrapper">
        <nav>
          <div className="logo"></div>
          <ul className="navMenuItems">
            <li>
              <NavLink className="navMenuLink" activeClassName="navMenuLinkACTIVE" to="/car">1. Car</NavLink>
            </li>
            <li>
              <NavLink className="navMenuLink" activeClassName="navMenuLinkACTIVE" to="/exterior">2. Exterior</NavLink>
            </li>
            <li>
              <NavLink className="navMenuLink" activeClassName="navMenuLinkACTIVE" to="/interior">3. Interior</NavLink>
            </li>
            <li>
              <NavLink className="navMenuLink" activeClassName="navMenuLinkACTIVE" to="/autopilot">4. Autopilot</NavLink>
            </li>
            <li>
              <NavLink className="navMenuLink" activeClassName="navMenuLinkACTIVE" to="/payment">5. Payment</NavLink>
            </li>
          </ul>
          <div className="locale-controller">US</div>
        </nav>

        <Switch>
          <Route path="/car">
            <Car />
          </Route>
          <Route path="/exterior">
            <Exterior />
          </Route>
          <Route path="/interior">
            <Interior />
          </Route>
          <Route path="/autopilot">
            <Autopilot />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>

        <div className="footer">footer</div>
      </div>
    </Router>
  );
};



export default App;
