import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Error from './Components/404/404';
import AllProtest from './Pages/AllProtest';
import Protestform from "./Components/Auth/Protestform";
import SingleProtest from './Pages/SingleProtest';
import PrivateRoute from './Components/PrivateRoute';
import MyProtest from './Components/AllProtest/MyProtest';
import Faq from './Components/knowYourProtest/knowYourProtest';
import VerifyUpd from './Pages/VerifyUpd';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/know" component={Faq} />


        {/* k<Route exact path="/register" component={Protestform} /> */}
        <PrivateRoute exact path="/createprotest">
          <Protestform />
        </PrivateRoute>

        <Route exact path="/signup" component={Register} />

        <Route exact path="/all-protests" component={AllProtest} />

        <PrivateRoute exact path="/protest/:protestId">
          <SingleProtest />
        </PrivateRoute>
        <PrivateRoute exact path="/myprotest/:userId">
          < MyProtest />
        </PrivateRoute>

        <PrivateRoute exact path="/verify/:protestId">
          <VerifyUpd />
        </PrivateRoute>

        <Route component={Error} />

      </Switch>
    </div>
  );
}

export default App;
