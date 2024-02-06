export default function Hero({jobTitle, setJobTitle, handleSearch}){
    return(
        <section className='containerStyle flex flex-col justify-center space-y-14 h-[450px] text-white bg-career bg-no-repeat bg-cover' >
                <div className='grid justify-center space-y-6' >
                    <h1 className='header text-center' >Explore Careers at PRCO</h1>
                    
                    <form 
                        onSubmit={handleSearch}
                    >   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input 
                                type="search" 
                                name='search'
                                value={jobTitle}
                                onChange={(e) => {setJobTitle(e.target.value)}}
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                                placeholder="Search Jobs by title" 
                                required 
                            />
                            <button 
                                type="submit" 
                                className="text-white absolute end-2.5 bottom-2.5 bg-[#216F66] focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                                >
                                    Search
                            </button>
                        </div>
                    </form>

                </div>
            </section>
    )
} 