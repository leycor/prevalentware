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

    const [listCompanyState, setListCompanyState] = React.useState([])
    const [change, setChange] = React.useState(1)

    // Recibir la lista de companias registradas
    useEffect(() => {
        const getDataFirebase = async() => {
            const data = await getDocs(collection(db, 'company'))
            const refListCompany = []
            data.forEach( document =>{
                const refCompany = {
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
                refListCompany.push(refCompany)
            })
            setListCompanyState(refListCompany)
        }
        getDataFirebase()
    }, [change])

    return (
        <Router basename='/prevalentware'>
            <>
                <NavBar countCompany={ listCompanyState.length } />
                <Switch>
                    <Route exact path='/' component={ MainPage }></Route>
                    <Route exact path='/admin'>
                        <AdminPage listCompanyState={listCompanyState} change={change}  setChange={setChange} />
                    </Route>
                    <Route path='/create-company'>
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
