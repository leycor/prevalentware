import tw from 'twin.macro'
import React from 'react'


// firebase
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
// ui components
import ContentPage from '../components/ui-components/ContentPage'

// img
import iconArrowLeft from '../assets/icons/iconArrowLeft.svg'
import iconArrowRight from '../assets/icons/iconArrowRight.svg'
import iconFile from '../assets/icons/iconFile.svg'
import iconUploadFile from '../assets/icons/iconUploadFile.svg'
import iconSuccesCompany from '../assets/icons/iconSuccesCompany.svg'
import iconRejectCompany from '../assets/icons/iconRejectCompany.svg'

// Style Components
const GridAdminPage = tw.div`flex flex-col`
const ButtonAdminPage1 = tw.button`flex items-center p-3 bg-white shadow-md rounded-md mb-4 hover:bg-gray-200`
const ImgButtonAdminPage = tw.img`mr-2 w-6 h-6`
const TextButtonAdminPage = tw.p`font-medium text-sm`
const BoxContentCompany = tw.div`mb-8`
const TitleCompany = tw.p`text-xs text-gray-500 font-normal`
const TitleContentCompany = tw.p`font-semibold ml-2 border-b pb-1 border-gray-400 uppercase`


const AdminPage = ({listCompanyState, change, setChange}) => {
    console.log('Ejecute componente AdminPAGE')    

    const [paginator, setPaginator] = React.useState(0)
    const [loader, setLoader] = React.useState(false)
    const [modal, setModal] = React.useState(false)

    const handleClickModal = () => {
        console.log('Muestrame el modal')
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    // Funcion que actualiza el estado de una empresa
    const handleChangeState = async(e) => {
        console.log(e.currentTarget.id)

        setLoader(true) // Agrega un loader al momento de updatear el dato
        if(e.currentTarget.id === 'approved'){
            console.log(listCompanyState[paginator].key)
            const companyRef = doc(db, "company", `${listCompanyState[paginator].key}`);

            await updateDoc(companyRef, {
            approved: true,
            rejected: false,
            pending: false,
            });
            setChange(change + 1)

        } else if(e.currentTarget.id === 'rejected'){
            console.log(listCompanyState[paginator].key)
            const companyRef = doc(db, "company", `${listCompanyState[paginator].key}`);

            await updateDoc(companyRef, {
            approved: false,
            rejected: true,
            pending: false,
            });
            setChange(change + 1)
        }
        setLoader(false)

    }

    // Funcion que controla el paginado de las companias
    const handleClickPaginator = (e) => {

        // Pagina siguiente
        if(e.target.name === 'next'){
            if(paginator === listCompanyState.length - 1){
                return
            }
            return setPaginator(paginator + 1)  
        }

        // Pagina anterior
        if(e.target.name === 'back'){
            if(paginator === 0) return
            return setPaginator(paginator - 1)
        }
    }
    

    return (
        <>
        {
            listCompanyState.length === 0
            ?
            <ContentPage>
                <p className='flex min-h-screen justify-center items-center text-mainBlue'>Cargando datos, por favor espere...</p>
            </ContentPage>
            : 
            <ContentPage>
                <p className='mb-8'><span className='text-mainBlue'>Administracion</span> / Aprobacion de empresas</p>
                {
                    loader &&
                    <p className='text-center mb-8 bg-white shadow-md p-5'>Actualizando Datos, por favor espere...</p>
                }

                {/* Company Data */}
                <GridAdminPage>
                    <div className=' bg-white shadow-md rounded-lg pt-6 px-10 mdNav:px-16 mb-10 '>
                        
                        {/* Logo and Button */}
                        <div className='flex justify-center mdNav:grid mdNav:grid-cols-3 '>
                            <img
                            src={ listCompanyState[paginator].logo } 
                            alt='companyLogo' 
                            className='col-start-2 bg-gray-300 p-10 mb-8'
                             />
                            <div className='hidden mdNav:flex mdNav:flex-col '>
                                <ButtonAdminPage1 onClick={handleChangeState} id='approved'>
                                    <ImgButtonAdminPage src={iconSuccesCompany} alt='iconSuccesCompany'/>
                                    <TextButtonAdminPage>Aprobar Empresa</TextButtonAdminPage>
                                </ButtonAdminPage1>

                                <ButtonAdminPage1 onClick={handleChangeState} id='rejected'>
                                    <ImgButtonAdminPage src={iconRejectCompany} alt='iconRejectCompany'/>
                                    <TextButtonAdminPage>Rechazar Empresa</TextButtonAdminPage>
                                </ButtonAdminPage1>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className='grid mdNav:grid-cols-2 gap-4'>
                            
                            <BoxContentCompany>
                                <TitleCompany>Estado</TitleCompany>
                                {
                                    listCompanyState[paginator].pending
                                    && <TitleContentCompany className='text-yellow-500'>Pendiente</TitleContentCompany>
                                }
                                {
                                    listCompanyState[paginator].approved
                                    && <TitleContentCompany className='text-green-500'>Aprobado</TitleContentCompany>
                                }
                                {
                                    listCompanyState[paginator].rejected
                                    && <TitleContentCompany className='text-red-500'>Rechazado</TitleContentCompany>
                                }
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Nombre de la empresa</TitleCompany>
                                <TitleContentCompany>{listCompanyState[paginator].name}</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Razon Social</TitleCompany>
                                <TitleContentCompany>{listCompanyState[paginator].businesName}</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Tipo de Identificacion</TitleCompany>
                                <TitleContentCompany>{listCompanyState[paginator].nit}</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Identificacion</TitleCompany>
                                <TitleContentCompany>{listCompanyState[paginator].sid}</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany># De empleados</TitleCompany>
                                <TitleContentCompany>{listCompanyState[paginator].employees}</TitleContentCompany>
                            </BoxContentCompany>

                            <div>
                                <div onClick={handleClickModal} className='mb-10 cursor-pointer  mdNav:flex items-center p-3 bg-white shadow rounded-md w-2/3'>
                                    <ImgButtonAdminPage src={iconUploadFile} alt='iconUploadFile'  />
                                    <TextButtonAdminPage >Ver archivos adjuntos</TextButtonAdminPage>
                                </div>
                            </div>

                            {/* Mostrar documentos para Moviles */}
                            <div className='mb-10 mdNav:hidden'>
                                <p className='mb-8'>Documentos Cargados</p>
                                <div className='flex justify-between items-center mb-8'>
                                    <p>RUT PrevalentWare</p>
                                    <img src={iconFile} alt="iconFile" />
                                </div>
                                <div className='flex justify-between items-center mb-8'>
                                    <p>RUT PrevalentWare</p>
                                    <img src={iconFile} alt="iconFile" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center gap-2 mdNav:hidden '>
                    <ButtonAdminPage1 onClick={handleChangeState} id='approved'>
                        <ImgButtonAdminPage src={iconSuccesCompany} alt='iconSuccesCompany'/>
                        <TextButtonAdminPage>Aprobar Empresa</TextButtonAdminPage>
                    </ButtonAdminPage1>

                    <ButtonAdminPage1 onClick={handleChangeState} id='rejected'>
                        <ImgButtonAdminPage src={iconRejectCompany} alt='iconRejectCompany'/>
                        <TextButtonAdminPage>Rechazar Empresa</TextButtonAdminPage>
                    </ButtonAdminPage1>
                    </div>

                    {/* Paginator */}
                    <div className='order-first mdNav:order-last flex items-center justify-center mb-8'>
                        {
                            paginator !== 0
                            && <img onClick={ handleClickPaginator } name='back' src={iconArrowLeft} alt='iconArrowLeft' className='h-7 w-7 cursor-pointer' />
                        }
                        <p className='px-2 text-xs mdNav:text-base'>Empresa {paginator + 1 } de {listCompanyState.length} pendiente por Aprobacion</p>
                        {
                            paginator !== listCompanyState.length - 1
                            && <img onClick={ handleClickPaginator } name='next' src={iconArrowRight} alt='iconArrowRight' className='h-7 w-7 cursor-pointer' />
                        }
                    </div>
                </GridAdminPage>
                {
                    modal &&
                    <div className='hidden mdNav:flex mdNav:flex-col px-10 py-10 bg-white border border-gray-200 shadow-md rounded-lg absolute m-auto inset-0 w-1/3 h-2/4'>
                        <div className='flex justify-between'>
                            <p className='text-center'>Documentos cargados</p>
                            <p onClick={handleCloseModal} className='cursor-pointer'>X</p>
                        </div>
                        <div className='mt-8 flex items-center justify-center'>
                            <p className='mr-10'>Nombre del documento</p>
                            <img className='h-8 w-8' src={iconFile} alt='Nombre de documento'></img>
                        </div>
                        <div className='mt-8 flex items-center justify-center'>
                            <p className='mr-10'>Nombre del documento</p>
                            <img className='h-8 w-8' src={iconFile} alt='Nombre de documento'></img>
                        </div>
                    </div>
                }

            </ContentPage>
        }
        </>
    )
}

export default AdminPage
