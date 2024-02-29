import React, { useState } from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase/firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { IoMdArrowBack } from "react-icons/io";
export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [viewPassword, setViewPassword] = useState();

    const handleSumbit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(auth => {navigate('/home')})
        .catch(error=>console.log(error))
    }

    const toggleBtn = () =>{
        setViewPassword(prevState => !prevState);
    }

    const navigate = useNavigate();
    
    const BtnRegister= ()=>{
        navigate('/register')
    }

    const auth = getAuth(app);
    
    return (

            <div className='relative w-full h-screen bg-zinc-900/90'>
            <img className='absolute object-cover w-full h-full mix-blend-overlay' 
            src='https://prensaminera.org/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-07-at-16.33.23-700x430.jpeg?x10678' alt=""/>


    <div className='relative flex items-center justify-center h-full'>
                <div className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
                    <form onSubmit={handleSumbit} >
                    <h1 className='py-2 text-4xl font-bold text-center' > Bienvenido Minero </h1>
                        <div className='flex flex-col py-2'>
                                <label className='py-2'> Email </label>
                                <input
                                 type="text"
                                 autoComplete="username email"
                                 placeholder='Enter you email'
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
                        <div className="mt-2">
                <div className="flex items-end justify-end">
                    <button className="" onClick={BtnRegister}>
              <div className="flex flex-row space-x-2 text-gray-500">
                <div className="mt-1">
                  <IoMdArrowBack />
                </div>
                <div> Registrase</div>
              </div>
            </button>
          </div>
        </div>
                        <div className=''>
                            <button
                                type="submit"
                                className="relative w-full py-3 mt-3 bg-indigo-600"> Ingresar </button>
                        </div>
                 
                    </form>
                </div>
        </div>


    </div>

    )
}
