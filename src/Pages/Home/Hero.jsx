export default function Hero(){
    return(
        <section className='containerStyle flex flex-col justify-center space-y-14 h-[600px] text-white bg-hero bg-no-repeat bg-cover' >
            <div className='space-y-2' >
                <h4 className='pre-header' >WE ARE EXPERTS</h4>
                <h1 className='header max-w-[25ch]' >PRCO provides Financial Consulting in different ways</h1>
                <p className='max-w-[45ch]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <a href="mailto:info@example.com?subject=Consultation%20Booking&body=Hello,%20I%20would%20love%20to%20book%20a%20consultation%20session." className='w-fit btn-outline-white' >Get Started</a>
            <div>
            </div>
        </section>
    )
}