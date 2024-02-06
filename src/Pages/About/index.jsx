import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Header from './Header'
import aboutInfograph from '../../assets/img/about-infograph.jpg'
import values from '../../assets/img/values.jpg'
import partners from '../../assets/img/partners.jpg'

export default function About(){
    return(
        <>
            <Navbar />
            <Header />
            <section className='containerStyle' >
                <div className='py-12 space-y-6' >
                    <p className='text-[22px]' >PRCO is a global consulting firm that partners with leaders in business and society to tackle their most important challenges and capture their greatest opportunities. Our success depends on a spirit of deep collaboration and a global community of diverse individuals determined to make the world and each other better every day.</p>
                </div>
                <div className='mb-12' >  
                    <h2 className='text-[35px] font-bold mb-6' >What We Believe </h2>
                    <p className='text-[17px] mb-4' >PRCO was one of the pioneers in business strategy when it was founded in 1963. Today, we work closely with clients to embrace a transformational approach aimed at benefiting all stakeholders—empowering organizations to grow, build sustainable competitive advantage, and drive positive societal impact. Our diverse, global teams are passionate about unlocking potential and making change happen, delivering integrated solutions through leading-edge management consulting, technology and design, and corporate and digital ventures.</p>
                </div>
                <div className='mb-12' >
                    <h2 className='text-[35px] font-bold mb-6' >A Global Consulting Firm</h2>
                    <img src={aboutInfograph} alt="A Global Consulting Firm" />
                </div>
                <div className='mb-12' >
                    <h2 className='text-[35px] font-bold mb-6' >About Our Purpose </h2>
                    <p className='text-[17px] mb-4' >At PRCO, we have one simple statement that encapsulates our broader purpose as a global business consulting firm: unlocking the potential of those who advance the world. We try to live our purpose through our work every day by focusing on five purpose principles:</p>
                    <ul className='pl-16 mb-4 space-y-3 list-disc' >
                        <li className='text-[17px]' >We bring insight to light by challenging traditional thinking and ways of operating and bringing new perspectives to the toughest problems.</li>
                        <li className='text-[17px]' >We drive inspired impact by looking beyond the next deadline to the next decade and by collaborating closely with our clients to enable and energize their organizations.</li>
                        <li className='text-[17px]' >We conquer complexity by discovering unique sources of competitive advantage and hidden truths in dynamic, complex systems.</li>
                        <li className='text-[17px]' >We lead with integrity by confronting the hard issues, staying true to our values, and stating our views candidly and directly.</li>
                        <li className='text-[17px]' >We grow by growing others, enabling our clients, colleagues, and the broader community to build success and achieve their full potential.</li>
                    </ul>
                </div>
                <div className='lg:flex space-y-4 lg:space-y-0 mb-12' >
                    <div className='space-y-2 basis-[50%]' >
                        <h3 className='text-[#2E2E2E] font-semibold text-[22px]'>OUR VALUES</h3>
                        <p className='text-[17px]'>Our values are the building blocks of our culture, embedded in everything we do and central to what allows us to be a global consulting firm that leads with integrity.</p>
                    </div>
                    <div className='basis-[45%]' >
                        <img src={values} alt="PRCO Values" />
                    </div>
                </div>
                <div className='space-y-2 mb-12' >
                    <h3 className='text-[#2E2E2E] font-semibold text-[22px]'>OUR EXPERTISE</h3>
                    <p className='text-[17px]'>Our experts bring deep industry and functional expertise and a range of perspectives that question the status quo and spark change. We work in a uniquely collaborative model across the firm and throughout all levels of the client organization, fueled by the goal of helping our clients thrive and enabling them to make the world a better place.</p>
                </div>
                <div className='space-y-4 mb-12' >
                    <div className='space-y-2' >
                        <h3 className='text-[#2E2E2E] font-semibold text-[22px]'>OUR PARTNERS</h3>
                        <p className='text-[17px]'>Partnership is one of PRCO’s core values. We collaborate across a diverse ecosystem of partner organizations to drive shared value and innovation.</p>
                    </div>
                    <img src={partners} alt="PRCO Partners" />
                </div>
            </section>
            <Footer />
        </>
    )
}