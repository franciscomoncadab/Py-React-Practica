import { useState, UseEffect} from "react"

function Formulario () {
     const [nombre, setNombre] = useState('')
     const [propietario, setPropietario] = useState('')
     const [email, setEmail] = useState('')
     const [fecha, setFecha] = useState('')
     const [sintomas, setSintomas] = useState('')

     const [err, setErr] = useState(false)
     
     const handleSubmit = (e) => {
          e.preventDefault()

          // Validando formulario
          if ([nombre, propietario, email, fecha, sintomas].includes('')) {
               console.log('Al menos hay un campo vacio')
          } else {
               console.log('Todo lleno')
          }
     }

     return (  
          <div className=" md:w-1/2 lg:w-2/5" >
               <h2 className=" font-black text-3xl text-center">
               Seguimiento de Pacientes</h2>

               <p className=' text-lg mt-5 text-center mb-5'>
                    Añade Pacientes y {""}
                    <span className="text-indigo-800 font-bold">Administralos</span>
               </p>

               <form className="bg-stone-300 shadow-xl rounded-lg py-10 px-5 mb-6">
                    <div className="mb-3">
                         <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de tu Mascota</label>
                         <input 
                         id="mascota"
                         type="text" 
                         placeholder="Nombre de tu Mascota"
                         className="border-3 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                         />
                    </div>

                    <div className="mb-3">
                         <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                         <input 
                         id="propietario"
                         type="text" 
                         placeholder="Nombre del propietario"
                         className="border-3 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                         />
                    </div>

                    <div className="mb-3">
                         <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-mail</label>
                         <input 
                         id="email"
                         type="email" 
                         placeholder="Ingresa tu email"
                         className="border-3 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                         />
                    </div>

                    <div className="mb-3">
                         <label htmlFor="salida" className="block text-gray-700 uppercase font-bold">Fecha de salida</label>
                         <input 
                         id="salida"
                         type="date" 
                         className="border-3 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                         />
                    </div>

                    <div className="mb-3">
                         <label htmlFor="mov-consulta" className="block text-gray-700 uppercase font-bold">Motivo de consulta</label>
                         <textarea 
                         id="mov-consulta" 
                         className="border-3 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                         placeholder="Breve descripción de consulta"     
                         />                                      
                    </div>

                    <input 
                    type="submit" 
                    className="bg-indigo-500 w-full p-3 text-white uppercase font-semibold
                    hover:bg-indigo-600 cursor-pointer transition-all"
                    value="Agregar Paciente"      
                    />
               </form>
          </div>
     );
}

export default Formulario
