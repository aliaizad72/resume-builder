import Info from "./resume/Info.jsx";

export default function Resume({ resume }) {
    return (
        <div className="mx-7 my-4 font-serif">
            <Info name={resume.name} email={resume.email} phone={resume.phone}/>
        </div>
    )
}