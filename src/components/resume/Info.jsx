export default function Info({ name, email, phone}) {
    return (
        <div>
            <h1 className="text-4xl mt-4 mb-2 text-center ">{name}</h1>
            <div className="flex justify-center gap-3">
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    )
}