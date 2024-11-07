import './App.css'
import Header from "./components/Header.jsx";
import Description from "./components/Description.jsx";
import Form from "./components/Form.jsx"
import Resume from "./components/Resume.jsx"
import {useState} from "react";

export default function App() {
    const defaultResume = {
        name: "Ali Aizad",
        email: "aliaizad72@gmail.com",
        phone: "60142529895",
        education: {
            school: "HELP University",
            title: "Bachelors of Psychology",
            end: "2023-01-13"
        },
        experience: {
            company: "CoinGecko",
            position: "Software Engineer Intern (Web)",
            start: "2024-12-01",
            end: "2025-05-31"
        }
    }

    const [resume, setResume] = useState(defaultResume)

    const createResumeObj = (e) => {
        e.preventDefault()
        const newResume = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            education: {
                school: document.getElementById("school").value,
                title: document.getElementById("studytitle").value,
                end: document.getElementById("studyend").value
            }
            ,
            experience: {
                company: document.getElementById("company").value,
                position: document.getElementById("position").value,
                start: document.getElementById("workstart").value,
                end: document.getElementById("workend").value
            }
        }
        setResume(newResume)
    }

    return (
        <div className="font-serif">
            <Header />
            <Description />
            <Form resume={resume} submitFn={createResumeObj} />
            <Resume resume={resume} />
        </div>
    )
}