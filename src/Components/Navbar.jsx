import logo from '../assets/icon/logo.jpg'
import { useState } from 'react'
export default function Navbar(){

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return(
        <>
            <nav className='hidden lg:flex items-center py-4 px-20' >
                <div className='mr-[100px]'  >
                    <a href='/'>
                        <img src={logo} alt="PRCO" />
                    </a>
                </div>

                <div className='flex items-center justify-between w-full' >
                    <div className='nav__list space-x-12' >
                        <a href="/" className='nav__link font-medium text-[17px] text-[#5E5E5E] hover:text-[#216F66]' >Home</a>
                        <a href="/industries" className='nav__link font-medium text-[17px] text-[#5E5E5E] hover:text-[#216F66]' >Industries</a>
                        <a href="/about" className='nav__link font-medium text-[17px] text-[#5E5E5E] hover:text-[#216F66]' >About</a>
                        <a href="/careers" className='nav__link font-medium text-[17px] text-[#5E5E5E] hover:text-[#216F66]' >Careers</a>
                    </div>
                    
                    <a href='mailto:info@prco.co' className='btn-solid' >Contact Us</a>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden justify-between items-center p-8">
                <a href='/'>
                    <img className='w-[100px]' src={logo} alt="PRCO" />
                </a>
                <button
                    onClick={handleToggle}
                >
                    {toggle ? (
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                        </svg>
                    )
                    :(
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
                        </svg>
                    )}
                </button>
                
            {/* Sidebar */}
            <div
                className={`${!toggle ? "hidden" : "flex"} z-20 fixed top-[74px] right-0 w-full h-screen  transition duration-300 ease-in-out bg-gray-50`}
            >
                <ul className="py-10 px-5 items-start space-y-2">
                <li>
                    <a href="/" className={`block py-2 pl-3 pr-4  rounded md:p-0`}
                    onClick={handleToggle}>
                    Home
                    </a>
                </li>
                <li>
                    <a href="/industries" className={`block py-2 pl-3 pr-4rounded md:p-0`}
                    onClick={handleToggle}>
                    Industries
                    </a>
                </li>
                <li>
                    <a href="/about" className={`block py-2 pl-3 pr-4rounded md:p-0`}
                    onClick={handleToggle}>
                    About
                    </a>
                </li>
                <li>
                    <a href="/careers" className={`block py-2 pl-3 pr-4rounded md:p-0`}
                    onClick={handleToggle}>
                    Career
                    </a>
                </li>
                <li>
                    <a href='mailto:info@prco.co' className='btn-solid' >Contact Us</a>
                </li>
                </ul>
            </div>
            </div>
        </>
    )
}