import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import AppLayout from './container/AppLayout';
import store from './sagas/store';
// import About from './About';
// import Login from './Login';
// import NotFound from './NotFound';
// import restricted from './Restricted';

const App = () => (
  <Provider store={store}>
  <Router>
        <Switch>
          <Route path="/" component={AppLayout} />
          {/* <Route path="/home" component={restricted(Home)} />
          <Route path="/about" component={About} />
          <Route component={NotFound} /> */}
        </Switch>
  </Router>
  </Provider>

);

export default App;