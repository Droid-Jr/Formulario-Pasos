function PasoTwoFinal({cambi}) {


    
  return (


    <div className=" w-[751px] h-[237px]  grid place-items-center">
        <section className="  w-[90%] h-[100%]  grid grid-rows-2">
            <article className="flex justify-between items-center">

                <div className="flex items-center">

                <div className="bg-[#ff552a] w-[25px] px-2 rounded-full text-[white] font-bold">2</div>
                <h3 className="text-[#202020] font-semibold px-2">Medio de Entrega</h3>
                </div>

                <div className="font-medium">
                    <button onClick={() => cambi()} >Editar</button>
                </div>
            </article>

            <article>
                <div className="flex items-center gap-4">
                <i className="fa-solid fa-check text-[#ff552a]"></i>
                <p className="text-[#3d3d3d] text-[15px]">Av. Manuel Valle 22, Pachacamac 15823,Lima</p>
                </div>
                
                <div className="flex items-center gap-4">
                <i className="fa-solid fa-check text-[#ff552a]"></i>
                <h3 className="text-[#5f5f5f]">Recojo en  Galpon</h3>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-check text-[#ff552a]"></i>
                <p className="text-[#5f5f5f]">Lima Lima</p>
                </div>
            </article>

        </section>
    </div>


  )
}
export default PasoTwoFinal