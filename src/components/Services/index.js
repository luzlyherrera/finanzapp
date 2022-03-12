import React from 'react'
import Icon1 from '../../images/svg-6.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-4.svg'
import { ServicesContainer, 
    ServicesH1, 
    ServicesCard, 
    ServicesH2, 
    ServicesIcon, 
    ServicesP, 
    ServicesWrapper
} from './servicesElementes'

const Services = () => {
  return (
    <>
        <ServicesContainer id="services">
            <ServicesH1>Nuestros Servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Ahorra</ServicesH2>
                    <ServicesP>Bla bla bla bla bla bla bla bla bla bla bla bla </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Optimiza tus inversiones</ServicesH2>
                    <ServicesP>Bla bla bla bla bla bla bla bla bla bla bla bla </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Mejora tus Finanzas</ServicesH2>
                    <ServicesP>Bla bla bla bla bla bla bla bla bla bla bla bla </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Oficina Virtual</ServicesH2>
                    <ServicesP>Bla bla bla bla bla bla bla bla bla bla bla bla </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services