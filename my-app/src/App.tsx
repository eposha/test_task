import SideBar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';
import Shopping from './Shopping/Shopping';
import Customer from './Customer/Customer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <SideBar />
        <Switch>
          <Route path='/shopping' component={Shopping} />
          <Route path='/customer' component={Customer} />
          <Route path='/:id?' component={MainContent} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
