import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import JobDescription from './JobDescription'
import Footer from '../../Components/Footer'

export default function Job(){

    const {id} = useParams();

    const [job, setJob] = useState({})

    const jobsArr = [
        {
            id: 1,
            title: 'Data Entry Analyst',
            location: 'Remote',
            pay: '$38.50 an hour',
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
            pay: '$40 an hour',
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

    useEffect(() => {
        const getJob = () => {
            const job = jobsArr.find((job) => job.id === parseInt(id))
            setJob(job)
        }
        getJob()
    }, [])

    return(
        <>
            <Navbar />
            <JobDescription job={job} />   
            <Footer />
        </>
    )
}