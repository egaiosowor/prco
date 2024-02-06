import infograph from '../../assets/img/edu-infograph.jpg'

export default function Education(){
    return(
        <section className='containerStyle' >
                    <div className='py-12 space-y-6' >
                        <p className='text-[22px]' >Disruptions in education are creating opportunities for educational systems—from K-12 through higher education—to innovate. PRCO’s education consulting experts work with clients to transform how people learn and educational systems thrive.</p>
                        <p className='text-[17px]' >Educational institutions face strong headwinds, and must overcome a deepening racial and socioeconomic achievement gap and disrupted learning experience for nearly 1.6 billion pandemic-affected students globally. With the right strategic focus—coupled with powerful human and digital capabilities and a willingness to innovate—educational institutions can transform their cultures and educational models to enable 21st century learning.
                        </p>
                    </div>
                    <div className='mb-12' >  
                        <h2 className='text-[35px] font-bold mb-6' > How PRCO Unlocks Opportunities for Education Innovation
</h2>
                        <p className='text-[17px] mb-4' >At PRCO, our education strategy consulting work sits at the intersection of education, employment, and welfare. Our experts deliver learning and training experiences that promote workplace readiness and success—and ensure that policies and funding support the well-being of disadvantaged children and students. Our education experts help organizations and institutions set a bold ambition, cultivate talent, and deliver proven technology and innovation initiatives, all while managing costs.</p>
                        <img src={infograph} alt="" />
                    </div>
                    <div className='mb-12' >
                        <h2 className='text-[35px] font-bold mb-6' >Our Areas of Focus </h2>
                        <p className='text-[17px] mb-4'>At PRCO, we have deep expertise in supporting transformative education initiatives at the local, national, and global levels. The heart of our education consulting practice serves traditional educational institutions, for learners from early-childhood education all the way through to lifelong learning. Beyond traditional education, we also help governments and businesses provide opportunities for lifelong learning so that people can gain the skills and capabilities that future workforces will require.</p>
                        <p className='text-[17px] mb-4' >PRCO serves as a thought leader and collaborator for prominent global education partners, delivering results including:</p>
                        <ul className='pl-16 mb-4 space-y-4 list-disc' >
                            <li className='text-[17px]' >Improving student-learning outcomes for 2.2 million students in India.  </li>
                            <li className='text-[17px]' >Partnering with not-for-profit foundations—such as the Bill & Melinda Gates Foundation and the Walton Family Foundation—to strengthen education in the US.</li>
                            <li className='text-[17px]' >Hosting conventions on early-childhood education and preschool, bringing together key providers, funders, and experts.</li>
                            <li className='text-[17px]' >Developing a multisector strategy together with UNICEF’s Generation Unlimited, ensuring every young person worldwide has access to education, training, and age-appropriate employment by 2030.</li>
                            <li className='text-[17px]' >Serving as a strategic partner for the World Economic Forum’s Global Future Councils, defining a new agenda for education, skills, technology, and the future of work.</li>
                            <li className='text-[17px]' >Supporting millions of children whose education has been disrupted by conflicts and natural disasters through UNICEF’s Education Cannot Wait nonprofit.</li>
                        </ul>
                    </div>
                </section>
    )
}