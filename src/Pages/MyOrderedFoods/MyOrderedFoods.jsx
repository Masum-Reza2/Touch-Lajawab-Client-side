import Spinner from "../../Components/Spinner/Spinner";
import useGlobal from "../../Hooks/useGlobal";
import useSecureAxios from "../../Hooks/useSecureAxios"
import { useQuery } from "@tanstack/react-query";
import OrderedItems from "./OrderedItems";
import Footer from "../../Components/Footer/Footer";

const MyOrderedFoods = () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['userSpecificOrder'],
        queryFn: () =>
            secureAxios.get(`/bookings?email=${user?.email}`)
    })

    if (isPending) return <Spinner />

    if (error) return 'An error has occurred: ' + error.message

    const userSpecificOrder = data?.data;


    return (
        <>
            <div className="py-5 min-h-screen">
                <h1 className="text-center font-bold text-lg md:text-xl">Your ordered food items : {userSpecificOrder.length} </h1>
                <div className="overflow-x-auto py-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Food Image</th>
                                <th>Food Name</th>
                                <th>Added time</th>
                                <th>Price</th>
                                <th>Owner</th>
                                <th>Ordered quantity</th>
                                <th>Actions</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                userSpecificOrder.map((card, index) => <OrderedItems refetch={refetch} key={card?._id} card={card} index={index} />)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyOrderedFoods