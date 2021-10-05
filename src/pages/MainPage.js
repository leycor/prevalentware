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
const cardMenu = [
    { 
        title:'Solicitudes de creacion de empresa',
        img: iconCardRequest,
        notify: 'Solicitudes a tratar',
        countNotify: 2,
    },
    { 
        title:'Indicadores',
        img: iconCardIndicators,
        notify: 'Visitado por ultima vez',
        countNotify: 2,
    },
    { 
        title:'Inscripcion de empleados en empresas',
        img: iconCardEmployees,
        notify: 'Usuarios sin empresas',
        countNotify: 3
    },
    { 
        title:'Gestion de usuarios',
        img: iconCardUsers,
        notify: 'Activos en la plataforma',
        countNotify: 532
    },
]



const MainPage = () => {
    return (
        <ContentPage>
            <GridCard>
                {
                    cardMenu.map( ({title, img, notify, countNotify}) => (
                        <Card key={title} title={title} img={img} notify={notify} countNotify={countNotify} />
                    ) )
                }
            </GridCard>
        </ContentPage>
    )
}

export default MainPage
