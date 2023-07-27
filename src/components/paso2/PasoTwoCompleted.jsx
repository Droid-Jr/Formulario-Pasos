import PasoTwoFinal from "./PasoTwoFinal"

function PasoTwoCompleted({TwoFinis, setTwoFinis ,setBarraTeo,}) {

    const cambi =  () => {
        setTwoFinis(!TwoFinis)
        setBarraTeo(true)
    }

  return (
   
    <>
    
    {
        !TwoFinis ? <>
        
        <div className=" w-[751px] h-[237px] border-[4px] border-t-[#fc5305] grid place-items-center">
        
        <div className="caja-2 w-[90%] h-[90%]  flex flex-col gap-10">

        <div className="flex gap-2 items-center py-2">
            <p className="bg-[#fa630c] rounded-full w-[30px] h-[30px] px-[10px] py-1 text-[white] font-bold ">2</p>
            <h2 className="font-semibold">Elige el medio de entrega</h2>
        </div>

        <section className="grid grid-cols-3 place-items-center py-5 border border-[#fa630c] rounded-md">

            <article>
            <i className="fa-solid fa-truck-fast text-[#fa630c] text-[50px] "></i>
            </article>

            <article >
                <h3 className="font-semibold">Recojo en  Galpon</h3>
                <p className="text-[#3d3d3d] text-[11.1px]">Av. Manuel Valle 22, Pachacamac 15823,Lima</p>
            </article>

            <article>
                <h2 className="font-semibold">Gratis</h2>
            </article>

        </section>

        <div>
        <button onClick={cambi} className="bg-[#fa630c] py-1 px-8 rounded-md text-[white] font-semibold">Guardar</button>
        </div>

        </div>

    </div>
        
        </>  : <PasoTwoFinal cambi={cambi} setBarraTeo={setBarraTeo}/>
    }

    </>
  )
}
export default PasoTwoCompleted