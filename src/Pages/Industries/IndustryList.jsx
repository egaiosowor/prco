import IndustryCard from '../../Components/IndustryCard'
import automotive from '../../assets/icon/automotive.jpg'
import education from '../../assets/icon/education.jpg'
import energy from '../../assets/icon/energy.jpg'
import financialServices from '../../assets/icon/financial-services.jpg'
import healthCare from '../../assets/icon/health-care.jpg'
import industrialGoods from '../../assets/icon/industrial-goods.jpg'
import insurance from '../../assets/icon/insurance.jpg'
import retail from '../../assets/icon/retail.jpg'
import transportation from '../../assets/icon/transportation.jpg'


export default function IndustryList(){

    const industryData = [
        {
            title: 'Automotive',
            icon: automotive,
            href: 'automotive'
        },
        {
            title: 'Education',
            icon: education,
            href: 'education'
        },
        {
            title: 'Energy',
            icon: energy,
            href: 'energy'
        },
        {
            title: 'Financial Services',
            icon: financialServices,
            href: 'financial-services'
        },
        {
            title: 'Health Care Industry',
            icon: healthCare,
            href: 'health-care'
        },
        {
            title: 'Industrial Goods',
            icon: industrialGoods,
            href: 'industrial-goods'
        },
        {
            title: 'Insurance Industry',
            icon: insurance,
            href: 'insurance'
        },
        {
            title: 'Retail Industry',
            icon: retail,
            href: 'retail'
        },
        {
            title: 'Transportation',
            icon: transportation,
            href: 'transportation'
        }
    ]

    return(
        <section className='containerStyle space-y-12 mb-12 py-12 lg:py-20' >
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4' >
                {
                    industryData.map(({title, icon, href}) => (
                        <IndustryCard
                            key={href} 
                            title={title}
                            icon={icon}
                            href={href}
                        />
                    ))
                }
            </div>
        </section>
    )
}