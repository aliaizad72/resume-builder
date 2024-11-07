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
            school: "",
            title: "",
            end: ""
        },
        experience: {
            company: "",
            position: "",
            start: "",
            end: ""
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
        <>
            <Header />
            <Description />
            <Form resume={resume} submitFn={createResumeObj} />
            <Resume resume={resume} />
        </>
    )
}