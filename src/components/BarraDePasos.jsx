function BarraDePasos( {Shouw , BarraTeo,Recibos}) {

   

  return (

    <div className="principal py-16 m-auto w-[851px] h-[74px] flex items-center gap-2 justify-center">

        <div className="flex flex-col items-center">

        <div className="icono border-[2px] border-[black] p-[3px] rounded-full h-[40px]  w-[40px]">
            <div className="bg-[#050536] rounded-full flex  items-center justify-center  w-[100%] h-[100%]">
            <i className="fa-solid fa-user text-white"></i>
            </div>
        </div>
        <h2 className="font-semibold">Datos personales</h2>
        </div>

        <div className={`barra w-[100px] translate-y-[-10px] h-[5px] border border-[black] rounded-xl duration-[750ms] ease-in-out ${Shouw && "bg-[#050536]"  }`}>

        </div>

        <div className="flex flex-col items-center">

        <div className={`icono border-[2px]  p-[3px] rounded-full h-[40px]  w-[40px] ${BarraTeo ? "border-[black]" : "border-[#777777]"} `}>
            <div className={` rounded-full flex  items-center justify-center  w-[100%] h-[100%] duration-700 ease-in-out ${BarraTeo ? "bg-[#050536]" : "bg-[#777777]"}`}>
            <i className="fa-solid fa-box-open text-white"></i>
            </div>
        </div>
        <h2 className="font-semibold">Medio de entrega</h2>
        </div>

        <div className={`barra w-[100px] translate-y-[-10px] h-[5px] border border-[black] rounded-xl duration-[750ms] ease-in-out ${BarraTeo && "bg-[#050536]" }`}>

        </div>


        <div className="flex flex-col items-center">

        <div className={`icono border-[2px]  p-[3px] rounded-full h-[40px]  w-[40px] ${Recibos ? "border-[black]" : "border-[#777777]"}`}>
            <div className={` rounded-full flex  items-center justify-center  w-[100%] h-[100%] ${Recibos ? "bg-[#050536]" : "bg-[#777777]"}`}>
            <i className="fa-regular fa-credit-card text-white"></i>
            </div>
        </div>
        <h2 className="font-semibold">Modo de pago</h2>
        </div>

        
        <div className={`barra w-[100px] translate-y-[-10px] h-[5px] border border-[black] rounded-xl duration-[750ms] ease-in-out ${Recibos && "bg-[#050536]" }`}>

        </div>

        <div className="flex flex-col items-center">
            

        <div className={`icono border-[2px]  p-[3px] rounded-full h-[40px]  w-[40px] ${Recibos ? "border-[black]" : "border-[#777777]"}`}>
            
            <div className={` rounded-full flex  items-center justify-center  w-[100%] h-[100%] ${Recibos ? "bg-[#050536]" : "bg-[#777777]"}`}>
            <i className="fa-solid fa-check text-white"></i>

            
            </div>
            
        </div>
        <h2 className="font-semibold">Confirmacion</h2>
        </div>


    </div>

  )
}
export default BarraDePasos