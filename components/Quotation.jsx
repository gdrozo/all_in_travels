import Info from './Info'

import QuotationForm from './QuotationForm'

function Quotation() {
  return (
    <div className='bg-[#e6e6e6] pt-10'>
      <Info title={'DISEÑA TU VIAJE'}>
        <div className='w-[min(1325px,100dvw)] flex flex-col justify-start gap-10'>
          <h3 className='sm:text-2xl text-lg font-black text-center mt-5'>
            AQUÍ COMIENZA TU EXPERIENCIA
          </h3>
          <div className='sm:text-3xl text-xl px-5 lg:px-0 text-justify'>
            Una vez llenado este formulario, uno de nuestros planners travelers
            se pondra en contacto contigo para perfeccionar ese viaje que tanto
            has soñado. Estamos aquí para brindarte la mejor experiencia.
          </div>
          <div>
            <QuotationForm></QuotationForm>
          </div>
        </div>
      </Info>
    </div>
  )
}

export default Quotation
