export default function GeneralInfo({ name, email, phone }) {
    return (
        <div className="font-serif">
            <h2 className="text-xl text-center">
                General Information
            </h2>
            <div className="mx-7 mb-3">
                <label htmlFor="name" className="block mb-2 font-medium">Name: </label>
                <input type="text" id="name"
                       className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={name} />
            </div>
            <div className="mx-7 mb-3">
                <label htmlFor="email" className="block mb-2 font-medium">Email: </label>
                <input type="email" id="email"
                       className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={email}/>
            </div>
            <div className="mx-7 mb-3">
                <label htmlFor="phone" className="block mb-2 font-medium">Phone Number: </label>
                <input type="number" id="phone"
                       className="bg-gray-50 border border-gray-300 outline-none rounded-lg focus:border-blue-800 block w-full p-2.5" defaultValue={phone}/>
            </div>
        </div>
    )
}