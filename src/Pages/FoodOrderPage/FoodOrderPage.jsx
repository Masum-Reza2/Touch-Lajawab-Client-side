import { useLoaderData } from "react-router-dom"

const FoodOrderPage = () => {
    const currentFood = useLoaderData();
    console.log(currentFood)
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">single food order here</h1>
        </div>
    )
}

export default FoodOrderPage