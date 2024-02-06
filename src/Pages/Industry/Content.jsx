import Automotive from './Automotive'
import Education from './Education'
import Energy from './Energy'
import FinancialServices from './FinancialServices'
import HealthCare from './HealthCare'
import IndustrialGoods from './IndustrialGoods'
import Insurance from './Insurance'
import Retail from './Retail'
import Transportation from './Transportation'

export default function Content({industry}){
    return(
        <>
            {industry === 'automotive' && <Automotive />}
            {industry === 'education' && <Education />}
            {industry === 'energy' && <Energy />}
            {industry === 'financial-services' && <FinancialServices />}
            {industry === 'health-care' && <HealthCare />}
            {industry === 'industrial-goods' && <IndustrialGoods />}
            {industry === 'insurance' && <Insurance />}
            {industry === 'retail' && <Retail />}
            {industry === 'transportation' && <Transportation />}
        </>
    )
}