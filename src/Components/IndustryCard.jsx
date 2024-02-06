export default function Industrycard({icon, title, href}){
    return(
        <article className='flex flex-col justify-between mx-auto p-6 h-[250px] w-full Wsm:w-[200px] bg-[#F5F5F5]  border-[#0A3833] border-b-2' >
            <div>
                <img src={icon} alt={title} />
            </div>

            <div className='space-y-3' >
                <p className='text-sm text-[#2E2E2E] font-bold' >{title}</p>
                <a href={`/industry/${href}`} className='flex items-center font-bold text-sm text-[#216F66]' >
                    LEARN MORE
                    <svg className='ml-1' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.38555 6.59771L2.6043 11.379C2.27383 11.7094 1.73945 11.7094 1.4125 11.379L0.617969 10.5844C0.2875 10.254 0.2875 9.71958 0.617969 9.39263L4.00703 6.00356L0.617969 2.6145C0.2875 2.28403 0.2875 1.74966 0.617969 1.42271L1.40898 0.621143C1.73945 0.290674 2.27383 0.290674 2.60078 0.621143L7.38203 5.40239C7.71602 5.73286 7.71602 6.26724 7.38555 6.59771Z" fill="#216F66" />
                    </svg>
                </a>
            </div>
        </article>
    )
}