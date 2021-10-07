// React
import React from 'react'
import tw from 'twin.macro'


import {
  Link
} from "react-router-dom";

// Img
import navLogo from '../../assets/icons/navLogo.svg'
import iconSearch from '../../assets/icons/iconSearch.svg'
import iconAdmin from '../../assets/icons/iconAdmin.svg'
import iconJob from '../../assets/icons/iconJob.svg'
import iconCv from '../../assets/icons/iconCv.svg'
import iconUser from '../../assets/icons/iconUser.svg'
import iconBurger from '../../assets/icons/iconBurger.svg'
import iconArrow from '../../assets/icons/iconArrow.svg'


// Style Components

const Nav = tw.nav`
text-xs font-medium font-roboto
z-50  sticky top-0 flex justify-between flex-wrap content-center px-8 w-full h-14 bg-navColor text-white`

const ColumnLeft = tw.div`flex items-center`
const ColumnRight = tw.div`flex items-center`
const ContentCenter = tw.div`flex items-center`
const ImgItemMenu = tw.img`mr-2 w-4 h-4`
const ContentDropMenu = tw.div`flex flex-col`
const IconDropMenu = tw.img`ml-1 w-3 h-3 cursor-pointer`
const IconDropMenuResponsive = tw.img`ml-2 w-3 h-3 cursor-pointer`
const ContentItemDropResponsiveMenu = tw.div`flex flex-col mt-5`
const ContentItemResponsiveMenu = tw.div`flex items-center mt-5`


const NavBar = ({countCompany} ) => {

    // Estado para ocultar menu responsivo
    const [toggleState, setToggleState] = React.useState(false)

    // Mostrar menu despegables
    const [dropMenuState, setDropMenuState] = React.useState({dropJobMenu: false, dropProfileMenu:false})
    const { dropJobMenu, dropProfileMenu } = dropMenuState

    const [dropMenuResponsiveState, setDropMenuResponsiveState] = React.useState({dropJobMenuResponsive: false, dropProfileMenuResponsive:false})
    const {dropJobMenuResponsive, dropProfileMenuResponsive} = dropMenuResponsiveState

    // Funcion que controla menu desplegable Responsive
    const handleDropMenuResponsive = (e) => {
        if(e.target.id === 'dropJobMenuResponsive'){
            return setDropMenuResponsiveState({dropJobMenuResponsive: !dropJobMenuResponsive ? true : false, dropProfileMenuResponsive:false})
        }
        if(e.target.id === 'dropProfileMenuResponsive'){
            return setDropMenuResponsiveState({dropProfileMenuResponsive: !dropProfileMenuResponsive ? true : false, dropJobMenuResponsive:false})
        }

    }

    // Funcion que controla menu despegables
    const handleDropMenu = (e) => {
        if(e.target.id === 'dropJobMenu'){
            return setDropMenuState({dropJobMenu: !dropJobMenu ? true : false, dropProfileMenu: false})
        }

        if(e.target.id === 'dropProfileMenu'){
            return setDropMenuState({dropJobMenu: false, dropProfileMenu: !dropProfileMenu ? true : false})
        }
    }

    // Función que controla el menú responsivo
    const handleToggleResponsiveMenu = () => {
        setToggleState( !toggleState ? true : false)
    }

    // Ocultar menu responsive al presionar un link
    const hiddeMenuResponsive = () => {
        setToggleState(false)
    }
    

    return (
        <>
            <Nav>
                <ColumnLeft>
                    {/* LOGO */}
                    <ContentCenter>
                        <Link onClick={ hiddeMenuResponsive } to='/' className='flex items-center'>
                            <img src={navLogo} alt="navLogo" width='50' height='50'/>
                            <p>Gente PreValente</p>
                        </Link>
                    </ContentCenter>

                    {/* BUSCADOR */}
                    <ContentCenter>
                        <img className='ml-10 hidden mdNav:flex' src={iconSearch} width='15' height='15' alt="iconSearch"/>

                        <input 
                        id="searchId" className='bg-navColor hidden mdNav:flex px-2 focus:outline-none'
                        type="text" 
                        name="search" 
                        placeholder='Buscar...'
                        />
                    </ContentCenter>

                </ColumnLeft>

                <ColumnRight>
                    <div className='hidden mdNav:flex items-center mr-10'>
                        <ImgItemMenu src={iconAdmin} alt='iconAdmin' />
                        <Link onClick={ hiddeMenuResponsive } to='/admin'>Administracion <span className='w-4 h-4 absolute pl-1.5 -mt-2 rounded-full bg-red-500 text-white text-xxs'>{countCompany}</span></Link>
                    </div>

                    {/* Menu Superior desplegable <Empleo> */}
                    <ContentDropMenu>
                        <div className='hidden mdNav:flex items-center mr-10'>
                            <ImgItemMenu src={iconJob} alt='iconJob' />
                            <p href="#aa">Empleo</p>
                            <IconDropMenu onClick={ handleDropMenu } src={iconArrow} id='dropJobMenu' alt='iconArrow' />   
                        </div>
                        {
                            dropJobMenu &&
                            <div className={`hidden mdNav:flex mdNav:flex-col bg-navColor px-5 absolute mt-8`}>
                                <a  className='py-2' href="#aa">Empleo 1</a>
                                <a  className='py-2' href="#aa">Empleo 2</a>
                                <a  className='py-2' href="#aa">Empleo 3</a>
                            </div>
                        }
                    </ContentDropMenu>


                    <div className='hidden mdNav:flex items-center mr-10'>
                         <ImgItemMenu src={iconCv} alt='iconCv' />
                        <a href="#aa">Mi CV</a>
                    </div>

                    {/* Menu Superior desplegable <Perfil> */}
                    <ContentDropMenu>
                        <div className='hidden mdNav:flex items-center'>
                            <img className='mr-2 w-8 h-8' src={iconUser} alt="iconUser" />
                            <a href="#aa">Daniel</a>
                            <IconDropMenu onClick={ handleDropMenu } src={iconArrow} id='dropProfileMenu' alt='iconArrow' />
                        </div>

                        {/* Menu desplegable  */}
                        {
                            dropProfileMenu &&
                        <div className={`hidden mdNav:flex mdNav:flex-col bg-navColor px-5 absolute mt-8`}>
                            <a  className='py-2' href="#aa">Perfil 1</a>
                            <a  className='py-2' href="#aa">Perfil 2</a>
                            <a  className='py-2' href="#aa">Perfil 3</a>
                        </div>
                        }
                    </ContentDropMenu>


                    {/* Icon menu responsive */}
                    <img 
                    onClick={ handleToggleResponsiveMenu }
                    className='cursor-pointer flex mdNav:hidden' 
                    src={iconBurger} alt="icon-burger"/>
                </ColumnRight>
            </Nav>

        {/* Menu Responsivo */}
        <div id='responsiveMenu' 
        className={`z-40 fixed flex flex-col px-7 bg-navColor py-5 text-white font-medium text-sm border-gray-300 border-r min-h-screen w-64 duration-300 ${ !toggleState ? '-ml-Nmedium': null} mdNav:-ml-Nmedium`} >
            <ContentItemDropResponsiveMenu>
                <div className='flex items-center'>
                    <img className='mr-2' width='30' height='30'  src={iconUser} alt="iconProfile" />
                    <a href="#aa">Daniel</a>
                    <IconDropMenuResponsive onClick={ handleDropMenuResponsive } id='dropProfileMenuResponsive' src={iconArrow} alt='iconArrow' />
                </div>
                <ul className={`${ !dropProfileMenuResponsive ? 'hidden' : 'block'} mt-3 ml-5`}>
                    <li className='py-1'>Perfil 1</li>
                    <li className='py-1'>Perfil 1</li>
                    <li className='py-1'>Perfil 1</li>
                </ul>
            </ContentItemDropResponsiveMenu>

            <ContentItemResponsiveMenu>
                <ImgItemMenu src={iconSearch} alt='iconSearch' />
                <input className='bg-navColor focus:outline-none'type="text" name="" id="" placeholder='Buscar...' />
            </ContentItemResponsiveMenu>

            <ContentItemResponsiveMenu>
                <ImgItemMenu src={iconAdmin} alt='iconAdmin' />
                <Link onClick={ hiddeMenuResponsive } to='/admin'>Administracion</Link>
            </ContentItemResponsiveMenu>
            
            <ContentItemDropResponsiveMenu>
                <div className='flex items-center'>
                    <ImgItemMenu src={iconJob} alt='iconJob' />
                    <a href="#aa">Empleo</a>
                    <IconDropMenuResponsive onClick={ handleDropMenuResponsive } id='dropJobMenuResponsive' src={iconArrow} alt='iconArrow' />
                </div>
                <ul className={`${ !dropJobMenuResponsive ? 'hidden' : 'block'} mt-3 ml-5`}>
                    <li className='py-1'>Empleo 1</li>
                    <li className='py-1'>Empleo 2</li>
                    <li className='py-1'>Empleo 3</li>
                </ul>   
            </ContentItemDropResponsiveMenu>


            <ContentItemResponsiveMenu>
                <ImgItemMenu src={iconCv} alt='iconCv' />
                <a href="#aa">Mi CV</a>
            </ContentItemResponsiveMenu>

        </div>
        </>
    )
}

export default NavBar

