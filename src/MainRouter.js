import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

// Firebase
// firebase
import { collection, getDocs } from "firebase/firestore";
import db from './firebase/firebaseConfig';

// Ui Components
import NavBar from './components/ui-components/NavBar';

// Pages
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import CreateCompanyPage from './pages/CreateCompanyPage';


const MainRouter = () => {
    console.log('Me ejecute')

    const [pendingCompany, setPendingCompany] = React.useState(0)

        // Numero de empresas por aprobar
        // Cargar todas las companias registradas
        useEffect(() => {
            const getData = async() => {
                const data = await getDocs(collection(db, 'company'))
                setPendingCompany(data.docs.length)
            }
            getData();
        },[])

    return (
        <Router basename='/'>
            <>
                <NavBar pendingCompany={ pendingCompany } />
                <Switch>
                    <Route exact path='/'  component={ MainPage }></Route>
                    <Route strict path='/admin'  component={ AdminPage }></Route>
                    <Route strict path='/create-company'  component={ CreateCompanyPage }></Route>
                    {/* <Route strict path={ gitUrl }  component={ GitPage }></Route>

                    <Route exact path='/not-found' component={ NotFound }></Route>
                    <Redirect to='/not-found'></Redirect> */}
                </Switch>
                
            </>
        </Router>
    )
}

export default MainRouter
