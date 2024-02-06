import { useState, useEffect } from 'react'
import logo from '../assets/icon/logo.jpg'


const Footer = () => {

    const [year, setYear] = useState("")

    useEffect(() => {

        const date = new Date()
        const year = date.getFullYear()
        setYear(year)

    }, [])

    return (
        <footer className="px-6 sm:px-[85px] bg-[#0A3833] text-white py-8">
            <hr className="my-4" />
            
            <div className='my-16 lg:flex lg:justify-between'>
  
                <div className="mb-6 lg:basis-1/4">
                    <a href='/'>
                        <svg width="119" height="34" viewBox="0 0 119 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.94 33V1.005C3.43 0.764998 5.845 0.644998 8.185 0.644998C11.335 0.644998 13.855 1.38 15.745 2.85C17.665 4.32 18.625 6.54 18.625 9.51C18.625 12.45 17.32 14.88 14.71 16.8C12.13 18.69 9.04 19.635 5.44 19.635C5.29 19.635 5.125 19.635 4.945 19.635V18.15C5.065 18.15 5.17 18.15 5.26 18.15C8.23 18.15 10.81 17.37 13 15.81C15.19 14.25 16.285 12.225 16.285 9.735C16.285 7.215 15.52 5.4 13.99 4.29C12.46 3.15 10.405 2.58 7.825 2.58C6.475 2.58 4.9 2.64 3.1 2.76V33H0.94ZM27.0875 33V0.959999C29.9375 0.749999 32.3225 0.644998 34.2425 0.644998C37.3025 0.644998 39.8225 1.44 41.8025 3.03C43.7825 4.59 44.7725 6.81 44.7725 9.69C44.7725 11.64 44.2025 13.455 43.0625 15.135C41.9225 16.815 40.6475 18.15 39.2375 19.14C40.3475 20.67 41.7125 22.5 43.3325 24.63C44.9825 26.73 46.0475 28.05 46.5275 28.59C48.3575 30.54 50.4275 31.65 52.7375 31.92L52.6925 33.36C50.8625 33.33 49.3775 33.06 48.2375 32.55C47.0975 32.01 46.0025 31.2 44.9525 30.12C43.9325 29.04 41.3675 25.68 37.2575 20.04C34.3175 20.04 31.6475 19.95 29.2475 19.77V33H27.0875ZM35.9525 18.24C37.2725 18.24 38.6825 17.37 40.1825 15.63C41.6825 13.89 42.4325 11.88 42.4325 9.6C42.4325 7.29 41.6525 5.55 40.0925 4.38C38.5625 3.18 36.5225 2.58 33.9725 2.58C32.6225 2.58 31.0475 2.64 29.2475 2.76V18.015C31.6475 18.165 33.8825 18.24 35.9525 18.24ZM71.4771 33.54C66.7971 33.54 62.7771 31.95 59.4171 28.77C56.0571 25.56 54.3771 21.615 54.3771 16.935C54.3771 12.225 55.8471 8.28 58.7871 5.1C61.7271 1.89 65.4921 0.284997 70.0821 0.284997C73.6821 0.284997 77.3271 0.884998 81.0172 2.085L80.4321 3.885C76.8321 2.805 73.3821 2.265 70.0821 2.265C66.1521 2.265 62.9421 3.675 60.4521 6.495C57.9621 9.315 56.7171 12.765 56.7171 16.845C56.7171 20.925 58.1571 24.405 61.0371 27.285C63.9471 30.135 67.4271 31.56 71.4771 31.56C75.0171 31.56 78.0771 31.02 80.6571 29.94L81.3321 31.47C80.1921 32.13 78.6921 32.64 76.8322 33C75.0021 33.36 73.2171 33.54 71.4771 33.54ZM91.6593 28.725C88.6893 25.515 87.2043 21.57 87.2043 16.89C87.2043 12.21 88.6893 8.28 91.6593 5.1C94.6593 1.89 98.4393 0.284997 102.999 0.284997C107.559 0.284997 111.339 1.89 114.339 5.1C117.339 8.28 118.839 12.21 118.839 16.89C118.839 21.57 117.339 25.515 114.339 28.725C111.339 31.935 107.559 33.54 102.999 33.54C98.4393 33.54 94.6593 31.935 91.6593 28.725ZM93.2793 6.495C90.7893 9.285 89.5443 12.75 89.5443 16.89C89.5443 21.03 90.7893 24.51 93.2793 27.33C95.7993 30.15 99.0393 31.56 102.999 31.56C106.989 31.56 110.229 30.15 112.719 27.33C115.239 24.51 116.499 21.03 116.499 16.89C116.499 12.75 115.239 9.285 112.719 6.495C110.229 3.675 106.989 2.265 102.999 2.265C99.0093 2.265 95.7693 3.675 93.2793 6.495Z" fill="black"/>
                        </svg>

                    </a>
                </div>
  
                {/* Footer Links */}
                <div className="grid grid-cols-[repeat(2,minmax(0,.4fr))] sm:grid-cols-[repeat(2,minmax(0,.2fr))] lg:grid-cols-[repeat(2,minmax(0,1fr))] lg:basis-2/5 gap-10 lg:justify-end">
                    {/* Section 1 */}
                    <div className='space-y-3' >
                        <h3>Quick Links</h3>
                        <ul className='space-y-1'>
                            <li><a href="/" >Home</a></li>
                            <li><a href="/about" >About</a></li>
                            <li><a href="/careers" >Careers</a></li>
                        </ul>
                    </div>


                    <div className='space-y-3' >
                        <h3>Industries</h3>
                        <ul className='space-y-1'>
                            <li><a href="/industry/automotive" >Automotive</a></li>
                            <li><a href="/industry/education" >Education</a></li>
                            <li><a href="/industry/energy" >Energy</a></li>
                            <li><a href="/industry/financial-services" >Financial Services</a></li>
                            <li><a href="/industry/health-care" >Health Care Industry</a></li>
                            <li><a href="/industry/industrial-goods" >Industrial Goods</a></li>
                            <li><a href="/industry/insurance" >Insurance Industry</a></li>
                            <li><a href="/industry/retail" >Retail Industry</a></li>
                            <li><a href="/industry/transportation" >Transportation</a></li>
                        </ul>
                    </div>
  
                </div>
            </div>
  
            {/* Horizontal Ruler */}
            <hr className="my-4" />

            <div className=''>
  
                {/* Copyright Text */}
                <p className='text-sm'>&copy; {year} PRCO. All rights reserved.</p>
            </div>
        </footer>
    );
  };
  
  export default Footer;