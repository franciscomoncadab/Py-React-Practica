function ListadoPacientes () {

     return (
          <div className=" w-1/2 lg:w-3/5">
               <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
               <p className="text-xl mt-5 mb-6 text-center">
                    Administra tus {''}
                    <span className="text-indigo-800 font-bold">Pacientes y Citas</span>
               </p>

               <div>
                    <p>Nombre: {''}
                         <span></span>
                    </p>
               </div>
          </div>
     )
}

export default ListadoPacientes