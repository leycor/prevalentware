import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

// Ui Components
import NavBar from './components/ui-components/NavBar';

// Pages
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';


const MainRouter = () => {
    return (
        <Router basename='/'>
            <>
                <NavBar />
                <Switch>
                    <Route exact path='/'  component={ MainPage }></Route>
                    <Route strict path='/admin'  component={ AdminPage }></Route>
                    {/* <Route strict path={ gitUrl }  component={ GitPage }></Route>

                    <Route exact path='/not-found' component={ NotFound }></Route>
                    <Redirect to='/not-found'></Redirect> */}
                </Switch>
                
            </>
        </Router>
    )
}

export default MainRouter
