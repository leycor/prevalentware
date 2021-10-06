import React from 'react'
import tw from 'twin.macro'

// ui components
import Card from '../components/ui-components/Card'
import ContentPage from '../components/ui-components/ContentPage'

// img
import iconCardRequest from '../assets/icons/iconCardRequest.svg'
import iconCardIndicators from '../assets/icons/iconCardIndicators.svg'
import iconCardEmployees from '../assets/icons/iconCardEmployees.svg'
import iconCardUsers from '../assets/icons/iconCardUsers.svg'

// Style Components
const GridCard = tw.div`grid md:grid-cols-2 gap-4`

// Helpers

const ID_CARD_MENU = {
    requestCompany: 'requestCompany',
    indicators: 'indicators',
    employees: 'employees',
    managementUsers: 'managementUsers',
}
const cardMenu = [
    { 
        id: ID_CARD_MENU.requestCompany,
        title:'Solicitudes de creacion de empresa',
        img: iconCardRequest,
        notify: 'Solicitudes a tratar',
        countNotify: 2,
        link:'/#'
    },
    { 
        id: ID_CARD_MENU.indicators,
        title:'Indicadores',
        img: iconCardIndicators,
        notify: 'Visitado por ultima vez',
        countNotify: 2,
        link:'/#'
    },
    { 
        id: ID_CARD_MENU.employees,
        title:'Inscripcion de empleados en empresas',
        img: iconCardEmployees,
        notify: 'Usuarios sin empresas',
        countNotify: 3,
        link:'/#'
    },
    { 
        id: ID_CARD_MENU.managementUsers,
        title:'Gestion de usuarios',
        img: iconCardUsers,
        notify: 'Activos en la plataforma',
        countNotify: 532,
        link:'/#'
    },
]



const MainPage = () => {
    return (
        <ContentPage>
            <GridCard>
                {
                    cardMenu.map( ({id,title, img, notify, countNotify,link}) => (
                        <Card key={id} nameId={id} title={title} img={img} notify={notify} countNotify={countNotify} link={link} />
                    ) )
                }
            </GridCard>
            
        </ContentPage>
    )
}

export default MainPage
