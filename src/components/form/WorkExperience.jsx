// eslint-disable-next-line react/prop-types
export default function WorkExperience({ company, position, start, end }) {
    return (
        <div>
            <h2 className="text-xl text-center">
                Work Experience
            </h2>
            <div>
                <div className="mb-3">
                    <label htmlFor="company" className="block mb-2 font-medium">Company Name: </label>
                    <input type="text" id="company"
                           className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={company} required={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="position" className="block mb-2 font-medium">Position Title: </label>
                    <input type="text" id="position"
                           className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={position} required={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="workstart" className="block mb-2 font-medium">Worked from: </label>
                    <input type="date" id="workstart"
                           className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={start} required={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="workend" className="block mb-2 font-medium">Worked until: </label>
                    <input type="date" id="workend"
                           className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={end} required={true}/>
                </div>
            </div>
        </div>
    )
}