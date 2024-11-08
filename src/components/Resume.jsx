import Info from "./resume/Info.jsx";
import EducationRes from "./resume/EducationRes.jsx";
import ExperienceRes from "./resume/ExperienceRes.jsx";

export default function Resume({ resume, editFn }) {
    return (
        <div className="md:w-[768px] md:mx-auto mb-4 flex flex-col gap-5 px-7">
            <Info name={resume.name} email={resume.email} phone={resume.phone}/>
            <EducationRes school={resume.education.school} title={resume.education.title} end={resume.education.end}/>
            <ExperienceRes company={resume.experience.company} position={resume.experience.position}
                           start={resume.experience.start} end={resume.experience.end}/>
            <button className="rounded-md bg-slate-800 p-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none" onClick={editFn}>Edit Resume</button>
        </div>
    )
}