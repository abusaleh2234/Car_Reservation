import { useQuery } from "@tanstack/react-query";

const Reservation = () => {

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['carData'],
        queryFn: () =>
          fetch('https://exam-server-7c41747804bf.herokuapp.com/carsList').then((res) =>
            res.json(),
          ),
      })
      console.log(data.data);
    return (
        <div className="py-10">
            <div className="">
                <div className="pb-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold ">Reservation</h1>
                    <button type="button" className="text-white bg-[#5D5CFF] hover:bg-[#5c5cffe1] font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2">Print / Download</button>

                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-6">
                        <div className="">
                            <h2 className="text-lg font-semibold border-b border-[#5D5CFF] pb-2">Reservation Details</h2>
                            <div className="mt-7 p-5 border rounded-md">
                                <form className="max-w-sm mx-auto">
                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Reservation ID</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Pickup Date <span className="text-[#FF1212] font-bold">*</span></label>
                                        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Return Date <span className="text-[#FF1212] font-bold">*</span></label>
                                        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="mb-5 flex items-center">
                                        <label className="w-1/2 block mb-2 text-sm font-normal text-gray-900 dark:text-white">Duration</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="">
                                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Discount</label>
                                        <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h2 className="text-lg font-semibold border-b border-[#5D5CFF] pb-2">Customer Information</h2>
                                <div className="mt-7 p-5 border rounded-md">
                                    <form className="max-w-sm mx-auto">
                                        <div className="mb-5">
                                            <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Vehicle Type <span className="text-[#FF1212] font-bold">*</span></label>
                                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option defaultValue={"Choose a country"}>Choose a country</option>
                                                <option value="Sedan">Sedan</option>
                                                <option value="SUV">SUV</option>

                                            </select>
                                        </div>
                                        <div className="mb-5">
                                            <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Vehicle <span className="text-[#FF1212] font-bold">*</span></label>
                                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option defaultValue={"Choose a country"}>Choose a country</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="FR">France</option>
                                                <option value="DE">Germany</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="">
                            <h2 className="text-lg font-semibold border-b border-[#5D5CFF] pb-2">Customer Information</h2>
                            <div className="mt-7 p-5 border rounded-md">
                                <form className="max-w-sm mx-auto">
                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">First Name <span className="text-[#FF1212] font-bold">*</span></label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Last Name <span className="text-[#FF1212] font-bold">*</span></label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Email <span className="text-[#FF1212] font-bold">*</span></label>
                                        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Phone <span className="text-[#FF1212] font-bold">*</span></label>
                                        <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="">
                            <h2 className="text-lg font-semibold border-b border-[#5D5CFF] pb-2">Additional Charges</h2>
                            <div className="mt-7 p-5 border rounded-md">
                                <form className="max-w-sm mx-auto space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-start">
                                            <div className="flex items-center">
                                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                            </div>
                                            <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Collision Damage Waiver</label>
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-normal">$9.00</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-start">
                                            <div className="flex items-center">
                                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                            </div>
                                            <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Liability Insurance</label>
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-normal">$15.00</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-start">
                                            <div className="flex items-center">
                                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                            </div>
                                            <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Rental Tax</label>
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-normal">11.5%</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-lg font-semibold border-b border-[#5D5CFF] pb-2">Charges Summary</h2>
                        <div className="mt-7 p-5 rounded-md border border-[#5D5CFF] bg-[#DFDFFF]">


                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right ">
                                    <thead className="text-sm  font-semibold border-b border-[#5D5CFF] pb-4">
                                        <tr className="">
                                            <th scope="col" className="pb-4">
                                                Charge
                                            </th>
                                            <th scope="col" className="pb-4">
                                                Unit
                                            </th>
                                            <th scope="col" className="pb-4">
                                                Rate
                                            </th>
                                            <th scope="col" className="pb-4">
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <th scope="row" className="text-sm font-normal py-4">
                                                Daily
                                            </th>
                                            <td className="text-center">
                                                { }fgd
                                            </td>
                                            <td className="text-center">
                                                { }sfd
                                            </td>
                                            <td className="text-center">
                                                { }fd
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="text-sm font-normal py-4">
                                                Collision Damage Waiver
                                            </th>
                                            <td className="text-center">
                                                { }fgd
                                            </td>
                                            <td className="text-center">
                                                { }sfd
                                            </td>
                                            <td className="text-center">
                                                { }fd
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;