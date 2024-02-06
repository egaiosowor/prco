import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Header from './Header'
import Content from './Content'

export default function Industry(){

    const {industry} = useParams()

    const [title, setTitle] = useState("")

    const industryData = [
        {
            title: 'Automotive',
            href: 'automotive',
        },
        {
            title: 'Education',
            href: 'education'
        },
        {
            title: 'Energy',
            href: 'energy'
        },
        {
            title: 'Financial Services',
            href: 'financial-services'
        },
        {
            title: 'Health Care Industry',
            href: 'health-care'
        },
        {
            title: 'Industrial Goods',
            href: 'industrial-goods'
        },
        {
            title: 'Insurance Industry',
            href: 'insurance'
        },
        {
            title: 'Retail Industry',
            href: 'retail'
        },
        {
            title: 'Transportation',
            href: 'transportation'
        }
    ]

    useEffect(() => {
        const getTitle = async () => {
            const title = industryData.find(el => el.href === industry)?.title
            setTitle(title)
        }
        getTitle()
    }, [])

    return(
        <>
            <Navbar />
            <Header title={title} industry={industry} />
            <Content industry={industry}  />
            <Footer />
        </>
    )
}