import React from 'react'
import tw from 'twin.macro'

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
    return (
        <>
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
                                <TitleContentCompany>PREVELANTWARE</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Razon Social</TitleCompany>
                                <TitleContentCompany>PREVALENTWARE S.A.S</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Tipo de Identificacion</TitleCompany>
                                <TitleContentCompany>NIT</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany>Identificacion</TitleCompany>
                                <TitleContentCompany>901375150-4</TitleContentCompany>
                            </BoxContentCompany>

                            <BoxContentCompany>
                                <TitleCompany># De empleados</TitleCompany>
                                <TitleContentCompany>1-10</TitleContentCompany>
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
                        <img src={iconArrowLeft} alt='iconArrowLeft' className='h-7 w-7' />
                        <p className='px-2 text-xs mdNav:text-base'>Empresa 1 de 2 pendiente por Aprobacion</p>
                        <img src={iconArrowRight} alt='iconArrowRight' className='h-7 w-7' />
                    </div>
                </GridAdminPage>
            </ContentPage>
        </>
    )
}

export default AdminPage
