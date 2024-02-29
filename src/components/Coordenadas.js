import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase';
import '../sytles/Coordenadas.css'

export const Coordenadas = ({uid, setModalOn, setChoice}) => {

    const todos = [];
    const [datos, setDatos] = useState([])

    const handleCancelClic = () =>{
        setModalOn(false)
        
    }

    function ViewInformation (){
        //setTodos([])
        const query = ref(db,"Cyclists/"+uid+"/Localization");
        console.log(uid)
        onValue(query,(snapshot)=>{
        const data = snapshot.val();
        if(data!==null){
            Object.values(data).map((todo)=>{
                todos.push(todo)
            })
        }
       /* Setting the state of `datos` to the value of `todos` */
        setDatos(todos)
        console.log(todos)   
    })
    }


    const viewMapa = ()=>{
        <a href="https://www.google.com.gt/maps/@{todos.latitud},{todos.longitud},15z" target="_blank">Parametrizado</a>
    }


  //console.log(uid)
  return (
    <div className="fixed inset-0 z-50 items-center justify-center bg-neutral-700 bg-opacity-60">
    <div className="top-0 left-0 items-center justify-center ">
    <div className="flex items-center justify-center min-h-screen modal-space-container ">
    <div className="flex flex-col items-center justify-center overflow-hidden overflow-y-scroll text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-coord w-96 card-content-month ">

           
    
   
    <div className=''>

    

    
   <table className='table-th' id="content-table">
    
    <thead className='' >
        {datos.slice(-10).map((item)=>(
                        <tr>
                            <td>{item.latitud}</td>
                            <td>{item.longitud}</td>
                            <td><a href={`https://maps.google.com/?q=${item.latitud},${item.longitud}`} target="_blank" rel='noreferrer'>Ver Mapa</a></td>
                        </tr>
        ))}
    </thead>
    <tbody>
        <tr>
        <th>Latitud</th>
        <th>Longitud</th>
        <th>Ver Mapa</th>
        </tr>
    </tbody>
   </table>
   </div>
   <div className='flex flex-row gap-4 mt-5'>

   
   <button onClick={handleCancelClic} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>

    </button>
    
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={()=>(ViewInformation())}
         
        > MOSTRAR</button>
        </div>
   </div>
    </div>
    </div>
    </div>
  )
}
