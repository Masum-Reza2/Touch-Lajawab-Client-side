import { useQuery } from "@tanstack/react-query"
import Spinner from "../Spinner/Spinner"
import TopFoodCard from "./TopFoodCard"

const TopSellingFoods = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['topFoods'],
        queryFn: () =>
            fetch('http://localhost:5000/topFoods').then(
                (res) => res.json(),
            ),
    })

    if (isPending) return <Spinner />
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="grid gap-5 px-5 grid-cols-2 md:grid-cols-3 py-4">
            {
                data?.map(food => <TopFoodCard key={food?._id} food={food} />)
            }
        </div>
    )
}

export default TopSellingFoods