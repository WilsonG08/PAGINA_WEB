import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { app, auth } from '../firebase/firebase';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { IoMdArrowBack } from "react-icons/io";

export const Register = () => {
    const [name, setName] = useState(''); // Agrega estado para el nombre
    const [lastName, setLastName] = useState(''); // Agrega estado para el apellido
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [viewPassword, setViewPassword] = useState();
    const [isRegistering, setIsRegistering] = useState(false)

    const handleSumbit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{navigate('/home')})
        .catch(error=>console.log(error))
    }

    const toggleBtn = () =>{
        setViewPassword(prevState => !prevState);
    }

    const navigate = useNavigate();
    

    const handleReturn =()=>{
        navigate('/Login')
    }

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute object-cover w-full h-full mix-blend-overlay' 
    src='https://prensaminera.org/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-07-at-16.33.23-700x430.jpeg?x10678' alt=""/>

<div className='relative flex items-center justify-center h-full'>
        <div className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
            <form onSubmit={handleSumbit} >
            <h1 className='py-2 text-4xl font-bold text-center' > Register </h1>
                <div className='flex flex-col py-2'>
                    <label className='py-2'> Nombre </label>
                    <input
                     type="text"
                     placeholder='Ingresa tu nombre'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='relative p-2 bg-gray-100 border border-gray-400 rounded-lg' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2'> Apellido </label>
                    <input
                     type="text"
                     placeholder='Ingresa tu apellido'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='relative p-2 bg-gray-100 border border-gray-400 rounded-lg' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2'> Email </label>
                    <input
                     type="text"
                     autoComplete="username email"
                     placeholder='Ingresa tu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='relative p-2 bg-gray-100 border border-gray-400 rounded-lg' />
                </div>
                <div className='flex flex-col'>
                    <label className='py-2'> Password </label> 
                    <div className='relative'>
                    <input placeholder='**********'
                        autoComplete="current-password"
                        type={viewPassword ? "text" :"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='relative w-full p-2 bg-gray-100 border border-gray-400 rounded-lg ' />
                        <div className='absolute text-2xl top-2 right-5'>
                        <button onClick={toggleBtn}>
                            {
                                viewPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                            }
                      
                        </button>
                        </div>
                    </div>  
                </div>
                <div className=''>
                    <button
                        type="submit"
                        className="relative w-full py-3 mt-8 bg-blue-500"> Registrarse </button>
                </div>
                <div className="mt-5">
                <div className="flex items-center justify-center">
                    <button className="" onClick={handleReturn}>
              <div className="flex flex-row space-x-2 text-gray-500">
                <div className="mt-1">
                  <IoMdArrowBack />
                </div>
                <div> Regresar al log in</div>
              </div>
            </button>
          </div>
        </div>
            </form>
        </div>
</div>


</div>


  )
}
