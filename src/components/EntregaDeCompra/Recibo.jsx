function Recibo() {
  return (
    <div className="principal w-[100%] min-h-screen">

      <div className="primero w-[1352px] h-[170px] border-t-[6px] border-[#4EBD09] grid place-content-center place-items-center">
       

        <h2 className="text-[#21333F] text-[25px] font-medium leading-[49px]">!Gracias¡ Hemos recibido tu pedido</h2>
        <p className="text-[#3C3C3C] font-normal leading-[32px] text-[19px] w-[60%] text-center">
          Recuerda que una vez validada la transferencia bancaria nos
          comunicaremos contigo en un plazo no mayor a 24 horas para coordinar
          la entrega de tu ejemplar.
        </p>
        
      </div>

      <div className="segundo w-[1352px] h-[265px] flex flex-col items-center justify-center ">

        <div className="caja w-[80%] h-[100%] flex flex-col justify-center gap-3">

        <div className="w-[100%] h-[30%] border-b-2 border-[#ff580b]">
        <h3>Orden recibida</h3>
        </div>

        <section className="grid grid-cols-4">

          <article className="flex flex-col gap-3">
            <h3 className="text-[#21333F] font-bold">Numero de rden</h3>
            <p className="text-[#3C3C3C]">1665</p>
          </article>

          <article>
            <h3 className="text-[#21333F] font-bold">Fecha de orden</h3>
            <p className="text-[#3C3C3C]">02 de febrero 2021</p>
          </article>

          <article>
            <h3 className="text-[#21333F] font-bold">Cantidad total</h3>
            <p className="text-[#3C3C3C]">s/. 10.000.00</p>
          </article>

          <article>
            <h3 className="text-[#21333F] font-bold">Metodo de pago</h3>
            <p className="text-[#3C3C3C]">Trasferencia Bancaria</p>
          </article>

        </section>

        </div>

      </div>

      <section className="tercero grid grid-cols-2 place-items-center  w-[1342px] h-[274px]">
        
        <article className="flex flex-col w-[66%] gap-3">
          <h2 className="text-[#21333F] font-bold">Detalles de la orden</h2>
          
          <div className="flex justify-between">
            <h3 className="text-[#21333F] font-medium">Ejemplar</h3>
            <p className="text-[#636262] ">1 Ejemplar -Batman</p>
          </div>
          
          <div className="flex justify-between">
            <h3 className="text-[#21333F] font-medium">Hora y fecha  de la orden</h3>
            <p className="text-[#636262] ">1.00pm 10-12-202</p>
          </div>
          
          <div className="flex justify-between">
            <h3 className="text-[#21333F] font-medium">Delivery  Location</h3>
            <p className="text-[#636262] ">House 17/A.West Jalkuri, Dhaka</p>
          </div>
        </article>

        <article className="flex flex-col w-[66%] gap-3">
          <h2 className="text-[#21333F] font-bold">Detalles de Cantidad</h2>

          <div className="flex justify-between">
            <h3 className="text-[#21333F] font-medium">Sub Total</h3>
            <p className="text-[#636262] ">s/. 10.000.00</p>
          </div>
          
          <div className="flex justify-between">
            <h3 className="text-[#21333F] font-medium">Payment Method</h3>
            <p className="text-[#636262] ">House 17/A West Jalkuri, Dhaka</p>
          </div>
          
          <div className="flex justify-between">
            <h3 className="text-[#21333F] font-medium">Total <span>(Inel VAT)</span></h3>
            <p className="text-[#636262] ">s./ 10.000.00</p>
          </div>

        </article>
      </section>

      <section className="cuarto w-[1352px] h-[230px] grid place-items-center">

        <div className="w-[93%] flex flex-col gap-5">

        <div className="flex justify-around bg-[#EF552A] text-[white] font-bold text-[20px] leading-[49px]">
          <h3>Ejemplar</h3>
          <h3>Nombre</h3>
          <h3>Placa</h3>
          <h3>Peso</h3>
          <h3>Nacimiento</h3>
          <h3>Precio</h3>
        </div>
        
        <div className="flex justify-around items-center text-[#545454] font-medium text-[21px] leading-[49px]">
          <img className="w-[100px]" src="/pollo.png"  />
          <p>Ejemplar Batman</p>
          <p>201</p>
          <p>9500 Lb</p>
          <p>11/12/2020</p>
          <p>s./ 10.000.00</p>
        </div>

        </div>

      </section>
      <div className="grid place-content-center gap-5 w-[1352px] h-[230px] text-center ">
        <button className="bg-[#EF552A] text-[white] font-semibold py-2 px-10 rounded-md">Descargar</button>
        <p className="text-[#EF552A] font-semibold">Volver  al Inicio</p>
      </div>
    </div>
  );
}
export default Recibo;
