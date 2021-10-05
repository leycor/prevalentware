import React, { useEffect } from 'react'
import tw from 'twin.macro'

// firebase
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig';

// ui components
import ContentPage from '../components/ui-components/ContentPage'

// img
import iconCompanyLogo from '../assets/icons/iconCompanyLogo.svg'
import iconArrowLeft from '../assets/icons/iconArrowLeft.svg'
import iconArrowRight from '../assets/icons/iconArrowRight.svg'
import iconFile from '../assets/icons/iconFile.svg'
import iconUploadFile from '../assets/icons/iconUploadFile.svg'
import iconSuccesCompany from '../assets/icons/iconSuccesCompany.svg'
import iconRejectCompany from '../assets/icons/iconRejectCompany.svg'

// Style Components
const GridAdminPage = tw.div`flex flex-col`
const ButtonAdminPage1 = tw.button`flex items-center p-3 bg-white shadow-md rounded-md mb-4`
const ImgButtonAdminPage = tw.img`mr-2 w-6 h-6`
const TextButtonAdminPage = tw.p`font-medium text-sm`
const BoxContentCompany = tw.div`mb-8`
const TitleCompany = tw.p`text-xs text-gray-500 font-normal`
const TitleContentCompany = tw.p`font-semibold ml-2 border-b pb-1 border-gray-400 uppercase`


const AdminPage = () => {

    const [companyState, setCompanyState] = React.useState([])
    const [loaderCompany, setLoaderCompany] = React.useState(true)
    const [paginator, setPaginator] = React.useState(0)

    const handleClickPaginator = (e) => {

        // Siguiente pagina
        if(e.target.name === 'next'){
            if(paginator === companyState.length - 1){
                return
            }
            return setPaginator(paginator + 1)
            
        }

        if(e.target.name === 'back'){
            if(paginator === 0) return
            return setPaginator(paginator - 1)
        }
    }

    // Cargar todas las companias registradas
    useEffect(() => {
        const getData = async() => {
            const data = await getDocs(collection(db, 'company'))
            const refListData = []
            data.forEach( (document) => {
                refListData.push(document.data())
                // setCompanyState([...companyState, document.data()])
                // console.log(companyState.length)
            } )
            setCompanyState(refListData)
            console.log(companyState)
            setLoaderCompany(false)
        }
        getData();
    },[])
    return (
        <>
        {
            loaderCompany 
            ?
            <ContentPage>
                <p className='flex min-h-screen justify-center items-center text-mainBlue'>Cargando datos, por favor espere...</p>
            </ContentPage>
            : 
            <ContentPage>
                <p className='mb-8'><span className='text-mainBlue'>Administracion</span> / Aprobacion de empresas</p>

                {/* Company Data */}
                <GridAdminPage>
                    <div className=' bg-white shadow-md rounded-lg pt-6 px-10 mdNav:px-16 mb-10 '>
                        
                        {/* Logo and Button */}
                        <div className='flex justify-center mdNav:grid mdNav:grid-cols-3 '>
                            <img src={iconCompanyLogo} alt='companyLogo' className='col-start-2 bg-gray-300 p-10 mb-8' />
                            <div className='hidden mdNav:flex mdNav:flex-col '>
                                <ButtonAdminPage1>
                                    <ImgButtonAdminPage src={iconSuccesCompany} alt='iconSuccesCompany'/>
                                    <TextButtonAdminPage>Aprobar Empresa</TextButtonAdminPage>
                                </ButtonAdminPage1>

                                <ButtonAdminPage1>
                                    <ImgButtonAdminPage src={iconRejectCompany} alt='iconRejectCompany'/>
                                    <TextButtonAdminPage>Rechazar Empresa</TextButtonAdminPage>
                                </ButtonAdminPage1>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className='grid mdNav:grid-cols-2 gap-4'>
                            
                            <BoxContentCompany>
                                <TitleCompany>Nombre de la empresa</TitleCompany>
                                <TitleContentCompany>{companyState[paginator].name}</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Razon Social</TitleCompany>
                                <TitleContentCompany>{companyState[paginator].businesName}</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Tipo de Identificacion</TitleCompany>
                                <TitleContentCompany>{companyState[paginator].nit}</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Identificacion</TitleCompany>
                                <TitleContentCompany>{companyState[paginator].id}</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany># De empleados</TitleCompany>
                                <TitleContentCompany>{companyState[paginator].employees}</TitleContentCompany>
                            </BoxContentCompany>

                            <div>
                                <div className='hidden mdNav:flex items-center p-3 bg-white shadow rounded-md w-2/3'>
                                    <ImgButtonAdminPage src={iconUploadFile} alt='iconUploadFile'  />
                                    <TextButtonAdminPage>Ver archivos adjuntos</TextButtonAdminPage>
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
                    <ButtonAdminPage1>
                        <ImgButtonAdminPage src={iconSuccesCompany} alt='iconSuccesCompany'/>
                        <TextButtonAdminPage>Aprobar Empresa</TextButtonAdminPage>
                    </ButtonAdminPage1>

                    <ButtonAdminPage1>
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
                        <p className='px-2 text-xs mdNav:text-base'>Empresa {paginator + 1 } de {companyState.length} pendiente por Aprobacion</p>
                        {
                            paginator !== companyState.length - 1
                            && <img onClick={ handleClickPaginator } name='next' src={iconArrowRight} alt='iconArrowRight' className='h-7 w-7 cursor-pointer' />
                        }
                    </div>
                </GridAdminPage>
            </ContentPage>
        }
        </>
    )
}

export default AdminPage
