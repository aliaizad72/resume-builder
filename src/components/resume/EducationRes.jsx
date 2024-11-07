export default function EducationRes({ school, title, end }) {
    return (
        <div>
            <h1 className="text-2xl my-3">
                Education
            </h1>
            <div>
                <p><strong>{title}</strong></p>
                <p>{school}</p>
                <p className="text-sm">{end}</p>
            </div>
        </div>
    )
}