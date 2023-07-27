function PasoOneCompletd( {formData, setShouw,Shouw,cambio}) {

  const open = () => {
    setShouw(!Shouw)
    cambio()
  }

  return (


    <div className="caja w-[751px] h-[237px]  grid place-items-center ">
        
        <div className="caja-2 w-[85%] h-[100%]  flex flex-col">

        <div className="flex  items-center justify-between py-4">
            
            <div className="flex items-center  gap-3">
            <p className="bg-[#fa630c] rounded-full w-[30px] h-[30px] px-[10px] py-1  text-[white] font-bold ">1</p>
            <h2 className="font-semibold">Identificacion</h2>
            </div>

            <button onClick={open}>Editar</button>
        </div>

        <div className="text-[#424242] py-1">
            <p>Solicitando unicamenta la imformacio esencial para la fianlisacion  de la compra</p>
        </div>

        <section className="grid grid-cols-2 grid-rows-2 py-4 gap-5">

            <article  className="flex items-center gap-4">
            <i className="fa-solid fa-check text-[#ff552a]"></i>
            <p className="text-[#5f5f5f]">{formData.email}</p>
            </article>

            <article className="flex items-center gap-4">
            <i className="fa-solid fa-check text-[#ff552a]"></i>
            <p className="text-[#5f5f5f]">{formData.documento}</p>
            </article>

            <article className="flex items-center gap-4">
            <i className="fa-solid fa-check text-[#ff552a]"></i>
            <p className="text-[#5f5f5f]">{formData.nombre} {formData.apellidos}</p>
            </article>

            <article className="flex items-center gap-4">
            <i className="fa-solid fa-check text-[#ff552a]"></i>
            <p className="text-[#5f5f5f]">{formData.telefono}</p>
            </article>

        </section>



        </div>
    </div>



  )
}
export default PasoOneCompletd