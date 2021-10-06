import React from 'react'
import { useHistory } from "react-router-dom";

// img
import iconCardWatch from '../../assets/icons/iconCardWatch.svg'

const Card = ({nameId, img, title, notify, countNotify}) => {

    const history = useHistory()
    // Funcion que detecta el menu con el que se va interactuar
    const handleOpenCard = (e) => {
        if(e.currentTarget.id === 'requestCompany')
            return history.push('/create-company')

        console.log(e.currentTarget.id)
    }

    return (
        <>
            <div className='text-black font-roboto mb-8'>
                <img src={img} alt="iconCardRequest" className='shadow-lg z-30 relative bg-mainBlue p-3 w-20 h-20 ml-5 md:ml-10 rounded'/>
                
                <div onClick={ handleOpenCard } id={nameId} name={nameId} className=' h-52 md:h-64 flex flex-col cursor-pointer justify-between relative -mt-11 bg-white rounded-lg shadow-md'>
                    <p className='pl-32 pr-10 md:pl-10 pb-8 pt-4 md:pt-24 text-blackSecond text-lg md:text-2xl font-medium'>{title}</p>
                    <div className='flex items-start py-4 px-10 text-sm border-t-2 '>
                        <img src={iconCardWatch} alt="iconCardWatch" className='mr-2'/>
                        <p className=' text-gray-400 '>{`${countNotify} ${notify} `}</p>
                    </div>
                </div>
            </div>
        </>

        
    )
}

export default Card
