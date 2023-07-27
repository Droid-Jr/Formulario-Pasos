
import { useState } from "react"
import PasoOneComepleted from './PasoOneCompletd'
import BarraDePasos from '../BarraDePasos'

function PasoOne({cambio}) {

    

    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
        apellidos: '',
        documento: '',
        telefono: '',
      })

    const [Shouw, setShouw] = useState(true)

const formus = e => {
    e.preventDefault()
    console.log(formData)
    setShouw(!Shouw);
    cambio()
  
}


const captura = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };


  return (

    <>
    <BarraDePasos Shouw={Shouw}/>
    {
        Shouw ? <>
        <div className="caja w-[751px] h-[580px] border-[4px] border-t-[#fc5305] grid place-items-center">
        <div className="caja-2 w-[90%] h-[90%]  flex flex-col">

        <div className="flex gap-2 items-center py-2">
            <p className="bg-[#fa630c] rounded-full w-[30px] h-[30px] px-[10px] py-1 text-[white] font-bold ">1</p>
            <h2 className="font-semibold">Identificacion</h2>
        </div>

        <div className="text-[#424242] py-4">
            <p>Solicitamos unicamente la solucion esencial para la finanzacion  de la compra</p>
        </div>

        <form onSubmit={formus} className="flex flex-col gap-7">
            <section className="flex flex-col">
                <label className="text-[#252525]"htmlFor="correo">Correo</label>
                <input type="email" name="email" value={formData.email} onChange={captura}  placeholder="jorge@gmail.com" className="py-1 px-3 border border-[black] rounded-sm outline-none"/>
            </section>

            <section className=" grid grid-cols-2 grid-rows-2 gap-4">

                <article className="flex flex-col ">
                    <label htmlFor="Nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={captura} placeholder="Jorge"  className="py-1 px-3 border border-[black] rounded-sm outline-none"/>
                </article>
                
                <article className="flex flex-col py-[2px]">

                <label htmlFor="Apellidos">Apellidos</label>
                    <input type="text" name="apellidos" value={formData.apellidos} onChange={captura} placeholder="Segura Casti" className="py-1 px-3 border border-[black] rounded-sm outline-none"/>
                </article>

                <article className="flex flex-col">
                <label htmlFor="Documento">Documento de Identidad</label>
                    <input type="text" name="documento" value={formData.documento} onChange={captura} placeholder="70859658"  className="py-1 px-3 border border-[black] rounded-sm outline-none"/>
                </article>
                
                <article className="flex flex-col">
                <label htmlFor="Telefono">Telefono/Movil</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={captura} placeholder="9854758564"  className="py-1 px-3 border border-[black] rounded-sm outline-none"/>
                </article>

            </section>

            <section className="flex gap-2">
                <input type="checkbox" />
                <p>He leido y acepto los terminos y condiciones y la politica de privacidad</p>
            </section>
            <div>
            <button  type="submit" className="bg-[#ff590c] py-2 px-8 rounded-md text-[white] font-semibold "  >Guardar</button>
            </div>
        </form>
        </div>
    </div>

        </> : <PasoOneComepleted cambio={cambio} formData={formData} setShouw={setShouw} Shouw={Shouw}/>
    }
    </>

  )
}
export default PasoOne