import Navbar from '../../Components/Navbar'
import Hero from './Hero'
import Brands from './Brands'
import About from './About'
import Expert from './Expert'
import Industry from './Industry'
import CTA from './CTA'
import Footer from '../../Components/Footer'

export default function Home(){
    return(
        <main >
            <Navbar />
            <Hero />
            <Brands />
            <About />
            <Expert />
            <Industry />
            <CTA />
            <Footer />
        </main>
    )
}