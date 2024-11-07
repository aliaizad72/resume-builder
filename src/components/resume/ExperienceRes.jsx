export default function ExperienceRes({ company, position, start, end }) {
    return (
        <div>
            <h1 className="text-2xl my-3">
                Work Experience
            </h1>
            <div>
                <p><strong>{company}</strong></p>
                <p>{position}</p>
                <p className="text-sm">From {start} to {end}</p>
            </div>
        </div>
    )
}