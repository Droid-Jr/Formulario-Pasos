import PasoThreeFormu from "./PasoThreeFormu"

function PasoThree({TwoFinis, setTwoFinis,Reci}) {



  return (

    <>
    
    {
      TwoFinis ? <PasoThreeFormu Reci={Reci}/> :
      <>
      
      <div className="w-[50%] py-16">
      <div className="flex items-center gap-3 w-[90%] h-[80%] m-auto ">
          <div className="bg-[#404140] w-[25px] px-2 rounded-full text-[white] font-bold">3</div>
          <h3 className="text-[#4b4949] font-semibold">Metodo de pago</h3>
      </div>
  </div>
      
      </>
    }
    
    </>

    


  )
}
export default PasoThree