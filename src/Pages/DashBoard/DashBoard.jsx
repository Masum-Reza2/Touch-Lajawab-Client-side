/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import DashPieChart from "../../Components/PieChart/DashPieChart"
import useSecureAxios from "../../Hooks/useSecureAxios";
import useGlobal from "../../Hooks/useGlobal";

const DashBoard = () => {
    const { mode } = useGlobal();
    const secureAxios = useSecureAxios();

    const [emailUser, setEmailUser] = useState([]);
    const [otherUser, setOtherUser] = useState([]);

    useEffect(() => {
        secureAxios.get(`/emailUser`)
            .then(res => setEmailUser(res?.data))
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        secureAxios.get(`googleOrGithubUser`)
            .then(res => setOtherUser(res?.data))
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <div className={`${mode ? 'text-gray-400' : ''}`}>
            <h1 className={`text-center mt-5 text-2xl font-bold  ${mode ? 'text-gray-400' : 'text-gray-600'}`}>Dash-Board</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-5 p-5">

                <div className={`border rounded-lg shadow-md  ${mode ? 'shadow-sky-400' : 'shadow-sky-900'}`}>
                    <DashPieChart emailUser={emailUser} otherUser={otherUser} />
                </div>

                <div className={`border rounded-lg flex flex-col  justify-center py-5 shadow-md  ${mode ? 'shadow-sky-400' : 'shadow-sky-900'}`}>
                    <h1 className="text-center font-bold underline">Email user's</h1>


                    <div className="overflow-scroll">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className={`${mode ? 'text-white' : ''}`}>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    emailUser?.map((user, index) => <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>


                </div>

                <div className={`border rounded-lg flex flex-col  justify-center py-5 shadow-md ${mode ? 'shadow-sky-400' : 'shadow-sky-900'}`}>
                    <h1 className="text-center font-bold underline">Google or Github user's</h1>

                    <div className="overflow-scroll">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className={`${mode ? 'text-white' : ''}`}>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    otherUser?.map((user, index) => <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
                {/* <div className=" border">
                    anothe chart here
                </div> */}
            </div>
        </div>
    )
}


export default DashBoard