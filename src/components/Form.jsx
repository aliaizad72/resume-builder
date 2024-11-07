import GeneralInfo from "./form/Generalnfo.jsx";
import Education from "./form/Education.jsx";
import WorkExperience from "./form/WorkExperience.jsx";

export default function Form() {
    return (
        <form className="md:w-[768px] md:mx-auto mb-4 flex flex-col gap-5">
            <GeneralInfo/>
            <Education/>
            <WorkExperience/>
            <input type="submit"
                   value="Create Resume"
                   className="rounded-md bg-slate-800 p-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none"
            />
        </form>
    )
}