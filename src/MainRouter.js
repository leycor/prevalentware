import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

// Firebase
// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase/firebaseConfig';

// Ui Components
import NavBar from './components/ui-components/NavBar';

// Pages
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import CreateCompanyPage from './pages/CreateCompanyPage';


const MainRouter = () => {
    console.log('Ejecutanto Main router')

    const [pendingCompany, setPendingCompany] = React.useState(0)
    const [companyState, setCompanyState] = React.useState([])
    const [change, setChange] = React.useState(1)

        useEffect((change) => {
            const getData = async() => {
                const data = await getDocs(collection(db, 'company'))
                const refListData = []
                data.forEach( (document) => {
                    const RefCompany = {
                        key: document.id,
                        approved: document.data().approved,
                        businesName: document.data().businesName,
                        employees: document.data().employees,
                        name: document.data().name,
                        nit: document.data().nit,
                        pending: document.data().pending,
                        rejected: document.data().rejected,
                        sid: document.data().sid,
                        logo: document.data().logo,
                }
                refListData.push(RefCompany)
            } )
            setCompanyState(refListData)
            setPendingCompany(refListData.length)
        }
        getData();
    },[change])

    return (
        <Router basename='/'>
            <>
                <NavBar pendingCompany={ pendingCompany } />
                <Switch>
                    <Route exact path='/'  component={ MainPage }></Route>
                    <Route strict path='/admin'>
                        <AdminPage companyState={companyState} change={change}  setChange={setChange} />
                    </Route>
                    <Route strict path='/create-company'>
                        <CreateCompanyPage change={change} setChange={setChange} />
                    </Route>
                    {/* <Route strict path={ gitUrl }  component={ GitPage }></Route>

                    <Route exact path='/not-found' component={ NotFound }></Route>
                    <Redirect to='/not-found'></Redirect> */}
                </Switch>
                
            </>
        </Router>
    )
}

export default MainRouter
