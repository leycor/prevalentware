import React from 'react'
import uniqid from 'uniqid'
import { useHistory } from "react-router-dom";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db, } from '../firebase/firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import tw from 'twin.macro'
// img
import iconClose from '../assets/icons/iconClose.svg'
import ContentPage from '../components/ui-components/ContentPage'

const BoxInput = tw.div`flex flex-col`
const LabelInput = tw.label`mb-1 text-sm`
const InputElement = tw.input`border border-gray-300 p-1 text-sm`

// ui components

const CreateCompanyPage = ({change, setChange}) => {

    const history = useHistory()

    const [formState, setFormState] = React.useState(
        { 
            sid:0, 
            name: '', 
            businesName: '', 
            nit: '', 
            employees:0, 
            pending: true, 
            approved:false, 
            rejected:false, 
            logo:''
        }
        )
    const { sid, name, businesName, nit, employees, pending, approved, rejected} = formState

    const [error, setError] = React.useState('')
    const [loader, setLoader] = React.useState(false)


    // Funcion que captura la data de los input
    const handleChangeInput = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
      }

    // Funcion que envia datos a firebase
    const handleSubmitData = (e) => {
        e.preventDefault()
        const file = e.target[5].files[0]

        // Validacion de nombre de la empresa
        if(name === ''){ return setError('El nombre de la empresa no puede estar vacio')}
        if(name.length < 3){return setError('El nombre de la empresa debe contener un minimo de 3 caracteres')}

        // Validacion para razon social
        if(businesName === ''){ return setError('El nombre de la razon social no puede estar vacio')}
        if(businesName.length < 2){return setError('El nombre de la razon social debe contener un minimo de 2 caracteres')}

        // Validacion para nit
        if(nit === ''){ return setError('El NIT no puede estar vacio')}
        if(nit.length < 2){ return setError('El NIT debe contener un minimo de 2 caracteres')}

        // Validacion para el ID
        if(sid === 0){ return setError('Es necesario establecer un id') }
        if(sid === ''){ return setError('Es necesario establecer un id')}
        if(sid === null || sid === undefined){ return setError('El valor del ID es incorrecto')}

        // Validacion para el empleados
        if(employees === 0){ return setError('La empresa debe tener como minimo un empleado')}
        if(employees === ''){return setError('La empresa debe tener como minimo un empleado')}

        if(sid === null || sid === undefined){ return setError('El valor de empleados es incorrecto')}

        // Evita que se carguen datos al momento de estar enviando los datos de una compania
        if(loader){ return setError('Espera, un archivo esta en proceso de registro') }

        if(file === undefined){ return setError('Es necesario que tu empresa tenga un loco, carga una imagen')}


        // Funcion que carga la imagen a firebase

        const test = async(file, fileNewName) => {
        
            const storage = getStorage();
            const imageRef = ref(storage, 'images/' + fileNewName);

            const refUploadImage = await uploadBytesResumable(imageRef, file, file.metadata)
            const refGetImage = await getDownloadURL(imageRef)
            setFormState({...formState, logo: refGetImage})
            const url = refGetImage

            const formCompanyRef = {
                sid: sid,
                name: name,
                businesName: businesName,
                nit: nit,
                employees: employees,
                pending: pending,
                approved: approved,
                rejected: rejected,
                logo: url,
            }

            try {
                const docRef = await addDoc(collection(db, "company"),formCompanyRef);
                docRef.id && setLoader(false)
                console.log("Document written with ID: ", docRef.id);
                setFormState(
                    { sid:0, name: '', businesName: '', nit: '', employees:0, pending: true, approved:false, rejected:false, logo:''}
                    )
                history.push('/admin')
                setChange(change + 1)
            } catch (e) {
                console.error("Error adding document: ", e);
            }

            console.log(formCompanyRef)

        }

        // Colocarle un nombbre unico al logo
        setLoader(true)
            const fileNewName = uniqid(`${file.name}-`)
            test(file, fileNewName)
    }


    return (
        <ContentPage>
        <form onSubmit={handleSubmitData} className='px-10 flex flex-col bg-white shadow-md border border-gray-300'>
            <div className='flex justify-between mb-8'>
                <p className='mx-auto pt-5'>Enviar solicitud</p>
                <img src={iconClose} alt='iconClose' className='mt-3  w-3 h-3 cursor-pointer' />
            </div>

            <div className='grid grid-cols-1 mdNav:grid-cols-2 gap-4 mb-4'>
                <BoxInput>
                    <LabelInput>Nombre de la empresa</LabelInput>
                    <InputElement
                    name='name'
                    value={name} 
                    onChange={ handleChangeInput } 
                    type='text'
                    placeholder='Nombre de la empresa' />
                </BoxInput>

                <BoxInput>
                    <LabelInput>Razon social </LabelInput>
                    <InputElement
                    name='businesName'
                    value={businesName} 
                    onChange={ handleChangeInput } 
                    type='text'
                    placeholder='Razon social' />
                </BoxInput>

                <BoxInput>
                    <LabelInput>Nit </LabelInput>
                    <InputElement
                    name='nit'
                    value={nit} 
                    onChange={ handleChangeInput } 
                    type='text'
                    placeholder='Nit' />
                </BoxInput>

                <BoxInput>
                    <LabelInput>Identificacion </LabelInput>
                    <InputElement
                    name='sid'
                    value={sid} 
                    onChange={ handleChangeInput } 
                    type='number'
                    placeholder='Nombre de la empresa' />
                </BoxInput>

                <BoxInput>
                    <LabelInput>Numero de empleados</LabelInput>
                    <InputElement
                    name='employees'
                    value={employees} 
                    onChange={ handleChangeInput } 
                    type='number'
                    placeholder='Nombre de la empresa' />
                </BoxInput>

                <BoxInput>
                    <LabelInput>Logo</LabelInput>
                    <InputElement
                    type='file'
                    placeholder='Logo de la empresa' />
                </BoxInput>

            </div>
            {
                loader && <p className='text-center'>Enviado datos, por favor espere...</p>
            }
            <button type='submit' className='mt-6 mb-8 bg-mainBlue cursor-pointer hover:bg-blue-500 p-3 font-medium text-center text-white'>Enviar Registro</button>
            <button>Test</button>
        </form>
        {
            error !== '' &&
            <p className='text-red-600 text-center mt-8'>{error}</p>
        }
        </ContentPage>
    )
}

export default CreateCompanyPage
