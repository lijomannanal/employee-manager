import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import EmployeeList from '../components/Employee/ListEmployee';
import AddEmployee from '../components/Employee/AddEmployee';
import EditEmployee from '../components/Employee/EditEmployee ';
import GlobalStyles from './GolbalStyles';
import 'react-toastify/dist/ReactToastify.css';
// import About from './About';
// import Login from './Login';
// import NotFound from './NotFound';
// import restricted from './Restricted';

const theme = createTheme({
    palette: {
      primary: {
        main: '#0000FF'
      }
    }
  });

const AppLayout = () => (
    <MuiThemeProvider theme={theme}>
        <Header/>
        <GlobalStyles/>
        <div className="app-page">
        <ToastContainer/>
        <Switch>
            <Route exact path="/add" component={AddEmployee} />
            <Route exact path="/edit/:id" component={EditEmployee} />
            <Route exact path="/" component={EmployeeList} />
            {/* <Route path="/home" component={restricted(Home)} />
            <Route path="/about" component={About} />
            <Route component={NotFound} /> */}
            </Switch>
        </div>
  </MuiThemeProvider>
);

export default AppLayout;