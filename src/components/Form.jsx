import GeneralInfo from "./form/Generalnfo.jsx";
import Education from "./form/Education.jsx";
import WorkExperience from "./form/WorkExperience.jsx";
import {useState} from "react";

export default function Form() {
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
        <form onSubmit={createResumeObj} className="md:w-[768px] md:mx-auto mb-4 flex flex-col gap-5">
            <GeneralInfo name={resume.name} email={resume.email} phone={resume.phone}/>
            <Education school={resume.education.school} title={resume.education.title} end={resume.education.end}/>
            <WorkExperience company={resume.experience.company} position={resume.experience.position} start={resume.experience.start} end={resume.experience.end} />
            <input type="submit"
                   value="Create Resume"
                   className="rounded-md bg-slate-800 p-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none"
            />
        </form>
    )
}