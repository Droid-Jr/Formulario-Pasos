import PasoTwoCompleted from './PasoTwoCompleted'

function PasoTwo({TwoPa, TwoFinis, setTwoFinis,setBarraTeo}) {

console.log(TwoPa)

  return (
    <>
    
    {
      TwoPa ?  <div className="w-[50%] py-5">
      <div className="flex items-center gap-3 w-[90%] h-[80%] m-auto ">
          <div className="bg-[#404140] w-[25px] px-2 rounded-full text-[white] font-bold">2</div>
          <h3 className="text-[#4b4949] font-semibold">Medio de Pago</h3>
      </div>
  </div>  : <PasoTwoCompleted TwoFinis={TwoFinis} setTwoFinis={setTwoFinis} setBarraTeo={setBarraTeo}/>
    }
    
    
    
    </>
    
   

  )
}
export default PasoTwo