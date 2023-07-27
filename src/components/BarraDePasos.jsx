function BarraDePasos( {Shouw}) {


  return (

    <div className="principal m-auto w-[851px] h-[74px] flex items-center gap-1 justify-center">

        <div className="icono border border-[black] p-[3px] rounded-full h-[40px]  w-[40px]">
            <div className="bg-[#050536] rounded-full flex  items-center justify-center  w-[100%] h-[100%]">
            <i className="fa-solid fa-user text-white"></i>
            </div>
        </div>

        <div className={`barra w-[100px] h-[10px] border border-[black] rounded-xl duration-[750ms] ease-in-out ${!Shouw && "bg-[red]"}`}>

        </div>

        <div className="icono border border-[black] p-[3px] rounded-full h-[40px]  w-[40px] ">
            <div className="bg-[#050536] rounded-full flex  items-center justify-center  w-[100%] h-[100%]">
            <i className="fa-solid fa-box-open text-white"></i>
            </div>
        </div>

        <div className="barra w-[100px] h-[10px] border border-[black] rounded-xl">

        </div>

        <div className="icono border border-[black] p-[3px] rounded-full h-[40px]  w-[40px] ">
            <div className="bg-[#050536] rounded-full flex  items-center justify-center  w-[100%] h-[100%]">
            <i className="fa-regular fa-credit-card text-white"></i>
            </div>
        </div>


        <div className="barra w-[100px] h-[10px] border border-[black] rounded-xl">

        </div>


        <div className="icono border border-[black] p-[3px] rounded-full h-[40px]  w-[40px] ">
            <div className="bg-[#050536] rounded-full flex  items-center justify-center  w-[100%] h-[100%]">
            <i className="fa-solid fa-check text-white"></i>
            </div>
        </div>



    </div>

  )
}
export default BarraDePasos