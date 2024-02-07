export default function About(){
    return(
        <section className='containerStyle lg:flex lg:justify-between lg:items-center py-12 space-y-10 lg:space-y-0 bg-[#F5F5F5] text-center lg:text-left' >
            <div className='space-y-2' >     
                <h2 className='sec-header max-w-[30ch] mx-auto lg:max-w-[40ch] lg:mx-0 text-[#2E2E2E]' >As the leading experts in this field, we're in over 90 countries</h2>
                <p className='max-w-[50ch] mx-auto lg:mx-0 text-[#5E5E5E]' >At PRCO, we have one simple statement that encapsulates our broader purpose as a global business consulting firm: unlocking the potential of those who advance the world.</p>
            </div>
            <div>
                <a href="/about" className='btn-outline-accent' >ABOUT US</a>
            </div>
        </section>
    )
}