
import { useState } from "react"
import PasoOne from "./components/Paso1/PasoOne"
import PasoTwo from "./components/paso2/PasoTwo"
import PasoThree from "./components/Paso3/PasoThree"
import Recibo from "./components/EntregaDeCompra/Recibo"




function App() {
  
  const [TwoPa, setTwoPa] = useState(false)
  const [TwoFinis, setTwoFinis] = useState(false)
  const [Recibos, setRecibos] = useState(false)

  const cambio = () => {
    setTwoPa(!TwoPa)
  }

  const Reci = () => {
    setRecibos (!Recibos)
  }
  

  return (
    <div className="w-[100%] h-screen">
      {
        Recibos ? <Recibo/> : <div>
         <PasoOne cambio={cambio} />
    
    <PasoTwo  TwoPa={TwoPa} setTwoFinis={setTwoFinis} TwoFinis={TwoFinis} />
    <PasoThree TwoFinis={TwoFinis} setTwoFinis={setTwoFinis} Reci={Reci}/>
        </div>
      }
    

    </div>
  )
}

export default App
