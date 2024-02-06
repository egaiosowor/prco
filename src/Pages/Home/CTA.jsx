import ctaImg from '../../assets/img/cta.jpg'

export default function CTA(){
    return(
        <section className='lg:flex' >
            <div className='basis-1/2' >
                <img src={ctaImg} alt="" />
            </div>

            <div className='py-12 px-10 lg:px-16 lg:py-20 space-y-10 basis-1/2 text-white bg-[#0A3833]' >
                    <div className='space-y-2' >
                        <h2 className='header' >Ready to find an Expert?</h2>
                        <p className='max-w-[45ch]' >Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.</p>
                    </div>
                    <div>
                        <a href="mailto:info@example.com?subject=Consultation%20Booking&body=Hello,%20I%20would%20love%20to%20book%20a%20consultation%20session." className='btn-outline-white !hover:bg-[#949494]' >Talk to an Expert</a>
                    </div>
                </div>
        </section>
    )
}