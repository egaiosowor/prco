export default function Header({title, industry}){

    return(
        <section className={`grid justify-center items-center bg-${industry} h-[550px] bg-no-repeat bg-cover`} >
                <h1 className="font-bold text-white text-[45px] lg:text-[85px]" >{title.toUpperCase()}</h1>
        </section>
    )
}