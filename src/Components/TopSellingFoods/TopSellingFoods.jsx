import { useQuery } from "@tanstack/react-query"
import Spinner from "../Spinner/Spinner"
import TopFoodCard from "./TopFoodCard"
import shef from '../../assets/images/shef.jpg'
import useGlobal from "../../Hooks/useGlobal"

const TopSellingFoods = () => {
    const { mode } = useGlobal();
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
        <div className="md:w-[90%] mx-auto" data-aos="fade-up">

            <div className={`text-center text-lg md:text-2xl font-bold py-3 mb-3 rounded-t-3xl mt-5 ${mode ? 'bg-black text-gray-500' : 'bg-sky-200'}  flex items-center justify-center gap-2`}>
                <h1>Top selling food items</h1>
                <img className="w-[30px] rounded-full" src={shef} alt="" />
            </div>

            <div className="grid gap-5 px-5 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-1">
                {
                    data?.map(food => <TopFoodCard key={food?._id} food={food} />)
                }
            </div>
            <div className={`border-b-2 py-5 rounded-b-3xl mb-5  ${mode ? 'bg-black' : 'bg-sky-200'} mt-3`}></div>
        </div>
    )
}

export default TopSellingFoods