import { useQuery } from "@tanstack/react-query";
import useGlobal from "../../Hooks/useGlobal";
import useSecureAxios from "../../Hooks/useSecureAxios";
import Spinner from "../../Components/Spinner/Spinner";
import AddedItems from "./AddedItems";


const MyAddedFoods = () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['userSpecificData'],
        queryFn: () =>
            secureAxios.get(`/userSpecific?email=${user?.email}`)
    })


    if (isPending) return <Spinner />

    if (error) return 'An error has occurred: ' + error.message

    const specificData = data?.data;



    return (
        <div className="py-5">
            <h1 className="text-center font-bold text-lg md:text-xl">My added food items : {specificData.length} </h1>
            <div className="overflow-x-auto py-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Food Origin</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Owner</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            specificData.map((card, index) => <AddedItems refetch={refetch} key={card?._id} card={card} index={index} />)
                        }
                    </tbody>

                </table>
            </div>
        </div >
    )
}

export default MyAddedFoods