export default function Education({ school, title, end }) {
    return (
        <div className="font-serif">
            <h2 className="text-xl text-center">
                Education
            </h2>
            <div className="mx-7 mb-3">
                <label htmlFor="school" className="block mb-2 font-medium">School Name: </label>
                <input type="text" id="school"
                       className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={school}/>
            </div>
            <div className="mx-7 mb-3">
                <label htmlFor="studytitle" className="block mb-2 font-medium">Title of Study: </label>
                <input type="text" id="studytitle"
                       className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={title}/>
            </div>
            <div className="mx-7 mb-3">
                <label htmlFor="studyend" className="block mb-2 font-medium">Date of Completion: </label>
                <input type="date" id="studyend" className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={end}/>
            </div>
        </div>
    )
}