import './App.css'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx"
import Resume from "./components/Resume.jsx"
import {useState} from "react";

export default function App() {
    const defaultResume = {
        name: "",
        email: "",
        phone: "",
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
    const [formFilled, setFormFilled] = useState(false)

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
        setFormFilled(!formFilled)
    }

    const editResume = () => {
        setFormFilled(!formFilled)
    }

    return (
        <div className="font-serif">
            {!formFilled && <Header/>}
            {!formFilled && <Form resume={resume} submitFn={createResumeObj} />}
            {formFilled && <Resume resume={resume} editFn={editResume} />}
        </div>
    )
}