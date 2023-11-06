import { useQuery } from "@tanstack/react-query"
import useSecureAxios from "../../Hooks/useSecureAxios"
import Spinner from "../../Components/Spinner/Spinner";

const AllFoodItems = () => {

    const secureAxios = useSecureAxios();

    const { isPending, error, data } = useQuery({
        queryKey: ['allFoods'],
        queryFn: () =>
            secureAxios.get('/allFoods')
    })

    if (isPending) return <Spinner />
    if (error) return 'An error has occurred: ' + error.message

    const allFoods = data?.data;

    return (
        <div>
            all food {allFoods.length}
        </div>
    )
}

export default AllFoodItems