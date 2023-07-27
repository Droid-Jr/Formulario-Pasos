import { useState } from "react"

function PasoThreeFormu({Reci}) {

const [Elige, setElige] = useState(false)
const [Elige2, setElige2] = useState(false)
const [Elige3, setElige3] = useState(false)

const can1 = ()  =>{
    setElige(!Elige)
    setElige2(false)
    setElige3(false)
}
const can2 = ()  =>{
    setElige2(!Elige2)
    setElige(false)
    setElige3(false)
}
const can3 = ()  =>{
    setElige3(!Elige3)
    setElige(false)
    setElige2(false)
}

  return (


    <div className="w-[751px] h-[1153px] grid place-items-center">

        <section className="w-[92%] h-[85%] flex flex-col gap-10  ">

        <div className=" flex gap-3 items-center py-2">
            <p className="bg-[#fa630c] rounded-full w-[30px] h-[30px] px-[10px] py-1 text-[white] font-bold ">3</p>
            <h2 className="font-semibold">Metodo De Pago</h2>
        </div>

        <div >
            <p><span>Trasferencia Bancaria</span> acontinuacion encontraras nuesta  cuentas BCR,BBVA,Interbank y Yape para procede con el pago </p>
        </div>

        <article className="w-[100%] gap-3 h-[50%] grid grid-rows-3">

            <div className="bcp flex justify-between border border-[#818181] rounded-md">
                <div className="px-5 py-2 flex gap-5">
                <div onClick={can1} className={`grid place-items-center  w-[25px] h-[25px] cursor-pointer rounded-full border border-[black] ${Elige && "bg-[#fc520f]"}`}>
                    <div className="w-[12px] h-[12px] bg-[white] rounded-full"></div>
                </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">Banco de Credito del Perú</h2>
                        <p>Soles Cuenta Corriente: 191-2115245-0-10</p>
                        <p>Soles Interbanck: 002-19100211524501058</p>
                    </div>
                    
                </div>
                <picture className="px-3">
                        <img className="w-[100px] " src="/bcp11.png" alt="" />
                    </picture>
            </div>

            <div className="inter flex justify-between border border-[#818181] rounded-md">
                <div className="px-5 py-2 flex gap-5">
                <div onClick={can2} className={`grid place-items-center  w-[25px] h-[25px] cursor-pointer rounded-full border border-[black] ${Elige2 && "bg-[#fc520f]"}`}>
                    <div className="w-[12px] h-[12px] bg-[white] rounded-full"></div>
                </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">Banco de Credito del Perú</h2>
                        <p>Soles Cuenta Corriente: 191-2115245-0-10</p>
                        <p>Soles Interbanck: 002-19100211524501058</p>
                    </div>
                    
                </div>
                <picture className="px-3">
                        <img className="w-[100px]" src="/interback.png" alt="" />
                    </picture>
            </div>


            <div className="bbva flex justify-between border border-[#818181] rounded-md">
                <div className="px-5 py-2 flex gap-5">
                <div onClick={can3} className={`grid place-items-center  w-[25px] h-[25px] cursor-pointer rounded-full border border-[black] ${Elige3 && "bg-[#fc520f]"}`}>
                    <div className="w-[12px] h-[12px] bg-[white] rounded-full"></div>
                </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">Banco de Credito del Perú</h2>
                        <p>Soles Cuenta Corriente: 191-2115245-0-10</p>
                        <p>Soles Interbanck: 002-19100211524501058</p>
                    </div>
                    
                </div>
                <picture className="px-3">
                        <img className="w-[100px]" src="/BBVA.png" alt="" />
                    </picture>
            </div>


        </article>


        <div>
            <p><span className="font-bold">Confirmacion</span> Confirmación Luego de realizar la transferencia a una de nuestras cuentas, adjunta el comprobante de la transferencia bancaria, la cual será validada en un tiempo máximo de 15 minutos y posteriormente nos pondremos en contacto contigo para coordinar la entrega del ejemplar.</p>
        </div>
        
        <div>
            <h1 className="text-center p-2 font-semibold">Adjunta tu comprobante</h1>

            <div className="w-[658px] h-[178px] m-auto border-dashed border-[3px] rounded-2xl
             border-[#fd4801] relative">
                <img className="absolute top-[8%] left-[44%]" src="/in.png" />
                <input className="w-[100%] h-[100%] outline-none rounded-2xl text-center font-medium" type="url" placeholder="Archivos compatibles JPG, PNG" />
            </div>
            <div className="flex gap-5 py-2">
                <input type="checkbox" />
                <p>He leído acepta los Términos y condiciones y la Política de Privacidad</p>
            </div>
            
            <div>
                <button onClick={() =>Reci()} className="py-2 px-14 bg-[#e2491a] font-bold text-[white] rounded-md">Guardar</button>
            </div>
        </div>

        </section>


    </div>


  )
}
export default PasoThreeFormu