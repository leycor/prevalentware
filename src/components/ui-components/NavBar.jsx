// React
import React from 'react'
import tw from 'twin.macro'

// Img
import navLogo from '../../assets/icons/navLogo.svg'
import iconSearch from '../../assets/icons/icon-search.svg'
import iconAdmin from '../../assets/icons/icon-admin.svg'
import iconJob from '../../assets/icons/icon-job.svg'
import iconCv from '../../assets/icons/icon-cv.svg'
import iconUser from '../../assets/icons/iconUser.svg'
import iconBurger from '../../assets/icons/icon-burger.svg'
import iconClose from '../../assets/icons/iconClose.svg'


// Style Components

const Nav = tw.nav`
text-xs font-medium font-roboto
z-50 overflow-hidden sticky top-0 flex justify-between flex-wrap content-center px-8 w-full h-14 bg-navColor text-white`

const ColumnLeft = tw.div`flex items-center`
const ColumnRight = tw.div`flex items-center`
const ContentCenter = tw.div`flex items-center`


const NavBar = () => {

    // Estado para ocultar menu responsivo
    const [toggleState, setToggleState] = React.useState(false)

    // Función que controla el menú responsivo
    const handleToggleResponsiveMenu = () => {
        setToggleState( !toggleState ? true : false)
    }
    

    return (
        // 0358529
        <>
            <Nav>
                <ColumnLeft>
                    <ContentCenter>
                        <img src={navLogo} alt="navLogo" width='50' height='50'/>
                        <p>Gente PreValente</p>
                    </ContentCenter>

                    <ContentCenter>
                        <img
                        className='ml-10 hidden mdNav:flex' 
                        src={iconSearch} 
                        width='15' 
                        height='15' 
                        alt="iconSearch"
                        />

                        <input
                        placeholder='Buscar...'
                        className='bg-navColor hidden mdNav:flex px-2 focus:outline-none'
                        type="text" 
                        name="search" 
                        id="searchId"
                        />
                    </ContentCenter>

                </ColumnLeft>

                <ColumnRight>
                    <div className='hidden mdNav:flex items-center mr-10'>
                        <img
                        className='mr-2'
                        width='16'
                        height='16' 
                        src={iconAdmin} 
                        alt="icon-admin" 
                        srcset="" />
                        <a href="#aa">Administracion</a>
                    </div>

                    <div className='hidden mdNav:flex items-center mr-10'>
                        <img
                        className='mr-2'
                        width='16'
                        height='16' 
                        src={iconJob} 
                        alt="icon-admin" 
                        srcset="" />
                        <a href="#aa">Empleo</a>
                    </div>

                    <div className='hidden mdNav:flex items-center mr-10'>
                        <img
                        className='mr-2'
                        width='13'
                        height='13' 
                        src={iconCv} 
                        alt="icon-admin" 
                        srcset="" />
                        <a href="#aa">Mi CV</a>
                    </div>

                    <div className='hidden mdNav:flex items-center'>
                        <img
                        className='mr-2'
                        width='20'
                        height='20' 
                        src={iconUser} 
                        alt="icon-admin" 
                        srcset="" />
                        <a href="#aa">Daniel</a>
                    </div>

                    {/* Icon menu responsive */}
                    <img
                    onClick={ handleToggleResponsiveMenu }
                    className='cursor-pointer flex mdNav:hidden' 
                    src={ toggleState ? iconClose : iconBurger} alt="" srcset="" />
                </ColumnRight>
            </Nav>

        {/* Menu Responsivo */}
        <div id='responsiveMenu' 
        className={`z-40 fixed flex flex-col px-7 bg-navColor py-5 text-white font-medium text-sm border-gray-300 border-r h-screen w-64 duration-300 ${ !toggleState ? '-ml-Nmedium': null} md:-ml-Nmedium`} >

            <div className='flex items-center mt-5'>
                <img
                className='mr-2'
                width='30'
                height='30' 
                src={iconUser} 
                alt="icon-admin" 
                srcset="" />
                <a href="#aa">Daniel</a>
            </div>
            <div className='flex items-center mt-5'>
                <img
                className='mr-2'
                width='16'
                height='16' 
                src={iconSearch} 
                alt="icon-search" 
                srcset="" />
                <input className='bg-navColor focus:outline-none'type="text" name="" id="" placeholder='Buscar...' />
            </div>

            <div className='flex mt-5'>
                <img
                className='mr-2'
                width='16'
                height='16' 
                src={iconAdmin} 
                alt="icon-admin" 
                srcset="" />
                <a href="#aa">Administracion</a>
            </div>
            <div className='flex mt-5'>
                <img
                className='mr-2'
                width='16'
                height='16' 
                src={iconJob} 
                alt="icon-job" 
                srcset="" />
                <a href="#aa">Empleo</a>
            </div>
            <div className='flex mt-5'>
                <img
                className='mr-2'
                width='16'
                height='16' 
                src={iconCv} 
                alt="icon-cv" 
                srcset="" />
                <a href="#aa">Mi CV</a>
            </div>
        </div>
        </>
    )
}

export default NavBar

