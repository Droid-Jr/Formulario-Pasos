import { useState } from "react";
import PasoOne from "./components/Paso1/PasoOne";
import PasoTwo from "./components/paso2/PasoTwo";
import PasoThree from "./components/Paso3/PasoThree";
import Recibo from "./components/EntregaDeCompra/Recibo";
import BarraDePasos from "./components/BarraDePasos";

function App() {
  const [Shouw, setShouw] = useState(false)
  const [TwoPa, setTwoPa] = useState(false);
  const [TwoFinis, setTwoFinis] = useState(false);
  const [Recibos, setRecibos] = useState(false);
  const [BarraTeo, setBarraTeo] = useState(false)

  const cambio = () => {
    setTwoPa(!TwoPa);
  };
 

  const Reci = () => {
    setRecibos(!Recibos);
  };

  return (
    <>
      {Recibos ? 
      <>
      <BarraDePasos Shouw={Shouw} BarraTeo={BarraTeo} Recibos={Recibos}/>
      <Recibo /> 
      </>
        
       : (
        <div>
        <BarraDePasos Shouw={Shouw} BarraTeo={BarraTeo} Recibos={Recibos}/>

          <PasoOne cambio={cambio} Shouw={Shouw} setShouw={setShouw} />

          <PasoTwo
            TwoPa={TwoPa}
            setTwoFinis={setTwoFinis}
            TwoFinis={TwoFinis}
            setBarraTeo={setBarraTeo}
            BarraTeo={BarraTeo}
          />
          <PasoThree
            TwoFinis={TwoFinis}
            setTwoFinis={setTwoFinis}
            Reci={Reci}
          />
        </div>
      )}
    </>
  );
}

export default App;
