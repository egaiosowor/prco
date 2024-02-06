import { useState } from 'react'

import Navbar from '../../Components/Navbar'
import Hero from './Hero'
import JobList from './JobList'
import JobDescription from './JobDescription'
import Footer from '../../Components/Footer'


export default function Careers(){

    const jobsArr = [
        {
            id: 1,
            title: 'Data Entry Analyst',
            location: 'Remote',
            pay: '$16 an hour',
            posted: '2 days ago',
            employment: 'Full-time',
            hiring: "multiple candidates",
            responsibilities: [
                "Accurately enter and update business information into the employer's database.",
                "Review and verify data for accuracy and consistency.",
                "Collaborate with cross-functional teams to resolve data-related issues.",
                "Assist in maintaining data integrity by identifying and rectifying errors.",
                "Continuously monitor and improve data quality processes"
            ],
            qualifications: [
                "Strong attention to detail and high level of accuracy",
                "Excellent data entry skills with a keen eye for consistency and correctness",
                "Proficiency in using data entry tools and software",
                "Good communication skills and ability to work collaboratively in a team",
                "Strong problem-solving skills and the ability to adapt to changes quickly"
            ]
        },
        {
            id: 2,
            title: 'Virtual Data Entry Clerk',
            location: 'Remote',
            pay: '$30 - $75 an hour',
            posted: '4 hours ago',
            employment: 'Full-time',
            hiring: "multiple candidates",
            responsibilities: [
                "Show up at least 10 mins before the scheduled start time of the discussion.",
                "Contribute to the discussion by completing both written and oral instructions.",
                "Fill out the written survey provided for each panel.",
                "You will be required to try out the provided products and/or services and be ready to discuss them before the meeting date.",
            ],
            qualifications: [
                "A smartphone with a functioning camera or webcam on a desktop/laptop is required.",
                "High-speed internet access is necessary.",
                "Ability to comprehend and follow both oral and written instructions",
                "Data entry clerk experience is not compulsory"
            ]
        },
        {
            id: 3,
            title: 'Data Entry Operator ',
            location: 'Remote',
            pay: '$15 an hour',
            posted: '2 days ago',
            employment: 'Full-time',
            hiring: "multiple candidates",
            responsibilities: [
                "Ensure to log in at least 10 minutes before your shift begins.",
                "Accurately enter data according to both written and oral guidelines provided for each task.",
                "Complete data entry tasks as assigned for each project.",
                "You may be asked to review and input data regarding products and/or services and be prepared to handle them efficiently before your workday."
            ],
            qualifications: [
                "Must have access to a computer or a smartphone with a reliable camera.",
                "High-speed internet connection is essential.",
                "Capable of understanding and executing detailed instructions.",
                "Previous experience in Data Entry is advantageous but not mandatory."
            ]
        },
        {
            id: 4,
            title: 'Data Entry Analyst',
            location: 'Remote',
            pay: '$30 to $40 an hour',
            posted: '2 days ago',
            employment: 'Contract',
            hiring: "multiple candidates",
            responsibilities: [
                "Calendar management and scheduling.",
                "Email correspondence and organization.",
                "Basic data entry and research tasks.",
                "Assisting with administrative duties.",
                "Handling phone calls and inquiries."
            ],
            qualifications: [
                "Strong organizational and multitasking abilities",
                "Excellent written and verbal communication skills",
                "Tech-savvy with proficiency in MS Office and Google Workspace",
                "Eagerness to learn and adapt to new tasks",
                "Reliable internet connection"
            ]
        },
        {
            id: 5,
            title: 'Social Media Virtual Assistant',
            location: 'Remote',
            pay: '$40 an hour',
            posted: '2 days ago',
            employment: 'Full-time',
            hiring: "multiple candidates",
            responsibilities: [
                "Social Media: scheduling, posting, community management",
                "Social Media paid advertising",
                "Content creation",
                "Writing",
                "Basic design (e.g., Canva)",
                "Metrics, reporting, and data analytics",
                "Increasing engagement, click-through rates, and conversions",
                "Managing ad budgets and spend",
                "Advertising on best practices",
                "Communication and presentations",
                "Creating processes",
                "Staying up to date with the latest marketing trends, techniques, and best practices"
            ],
            qualifications: [
                "Daily availability (Mon-Fri) during US business hours",
                "Fluent English - written and spoken",
                "Digital marketing qualification or similar",
                "At least 1 year of relevant work experience",
                "Experience working remotely",
                "A portfolio to demonstrate previous work"
            ]
        },
        {
            id: 6,
            title: 'Social Media Manager',
            location: 'Remote',
            pay: '$45 an hour',
            posted: '2 days ago',
            employment: 'Contract',
            hiring: "1 candidate",
            responsibilities: [
                "Partner closely with the social media team in creating copy and suggesting copyedits for content produced by team members, partners, and agencies.",
                "Help steward the brand tone of voice through thoughtful refinements of corporate copy; is eager to infuse personality in all content.",
                "Strategically evaluate and provide constructive feedback on content and creative to ensure it aligns with our brand positioning, target audiences and social best practices.",
                "Lead copyediting for our employee advocacy tool with day-to-day copyediting and content optimization.",
                "Partner with governance/reporting lead to identify performance trends and insights from published content and provide and implement recommendations and optimizations for future content."
            ],
            qualifications: [
                "Possesses strong understanding of social, including current trends and what’s coming next, and has an informed POV on its role in marketing; understands platform features and audience nuances that help drive bespoke content strategies ",
                "Learns quickly, enjoys experimenting, learns from mistakes and adjusts. ",
                "Welcomes input from others & responds openly to advice & instruction; finds ways to contribute to the group’s efforts and priorities.",
                "Crafts unique and engaging copy that ties back to our brand voice and overarching social strategy. ",
                "Asks for help when needed; pursues ways to develop new skills."
            ]
        }
    ]

    const [jobTitle, setJobTitle] = useState("")
    const [job, setJob] = useState({})
    const [jobs, setJobs] = useState(jobsArr)
    const [noJobs, setNoJobs] = useState(false)



    const handleSearch = (e) => {
        e.preventDefault()
        const newJobs = jobsArr.filter(job => job.title.toLowerCase().includes(jobTitle.toLowerCase()));
        if ((newJobs.length > 0)) {
            setJobs(newJobs);
            setNoJobs(false);
        } else {
            setNoJobs(true);
        }
    }

    return(
        <>
            <Navbar />
            <Hero jobTitle={jobTitle} setJobTitle={setJobTitle} handleSearch={handleSearch} />

            {
                noJobs ? (
                    <section className='containerStyle grid justify-center items-center py-12 lg:py-20 h-[60vh]'>
                        <svg className='mx-auto' width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5929 82.3745C22.8436 90.6369 33.831 95.5969 45.4851 96.3201C57.1392 97.0434 68.6555 93.4799 77.8644 86.301L109.551 117.987C110.675 119.073 112.18 119.673 113.742 119.66C115.304 119.646 116.799 119.02 117.903 117.915C119.008 116.81 119.635 115.316 119.648 113.753C119.662 112.191 119.061 110.686 117.976 109.562L86.2895 77.876C93.7869 68.2542 97.3315 56.1349 96.2005 43.9895C95.0695 31.8442 89.348 20.5877 80.203 12.5158C71.0579 4.44387 59.1781 0.164474 46.9864 0.550369C34.7946 0.936265 23.2092 5.95838 14.5929 14.5925C10.1408 19.0423 6.60911 24.3257 4.19954 30.1409C1.78996 35.956 0.549744 42.1889 0.549744 48.4835C0.549744 54.7781 1.78996 61.011 4.19954 66.8261C6.60911 72.6413 10.1408 77.9247 14.5929 82.3745V82.3745ZM23.018 23.0295C28.9082 17.1394 36.6585 13.4738 44.9484 12.6572C53.2383 11.8407 61.5548 13.9237 68.481 18.5514C75.4073 23.179 80.5148 30.0651 82.9332 38.0363C85.3517 46.0074 84.9315 54.5706 81.7443 62.2667C78.5571 69.9628 72.8 76.3157 65.454 80.2431C58.108 84.1705 49.6275 85.4293 41.4574 83.8051C33.2873 82.1809 25.9331 77.7742 20.6477 71.3357C15.3624 64.8973 12.473 56.8254 12.4717 48.4954C12.4554 43.762 13.3792 39.0724 15.1896 34.6988C17 30.3252 19.6609 26.3547 23.018 23.0176V23.0295ZM20.5393 48.4775C20.5393 46.8973 21.1671 45.3818 22.2845 44.2644C23.4019 43.147 24.9174 42.5192 26.4977 42.5192C28.0779 42.5192 29.5934 43.147 30.7108 44.2644C31.8282 45.3818 32.456 46.8973 32.456 48.4775C32.4607 52.7254 34.1503 56.7979 37.1539 59.8016C40.1576 62.8052 44.2301 64.4948 48.4779 64.4995C50.0582 64.4995 51.5737 65.1273 52.6911 66.2447C53.8085 67.3621 54.4363 68.8776 54.4363 70.4578C54.4363 72.0381 53.8085 73.5536 52.6911 74.671C51.5737 75.7884 50.0582 76.4162 48.4779 76.4162C41.0735 76.3989 33.9772 73.4498 28.7415 68.214C23.5057 62.9783 20.5566 55.882 20.5393 48.4775V48.4775Z" fill="#908F8F"/>
                        </svg>

                        <p>We couldn't find anything for your search</p>
                    </section>
                )
                : (

                <section className='containerStyle lg:flex justify-between py-12 lg:py-20'>
                    <JobList jobs={jobs} setJob={setJob} />  
                    <JobDescription job={job} />
                </section>
                )
            }
            <Footer />
        </>
    )
}