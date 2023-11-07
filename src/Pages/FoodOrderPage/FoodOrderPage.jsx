import { Link, useLoaderData } from "react-router-dom";

const FoodOrderPage = () => {
    const currentFood = useLoaderData();

    const { foodName, img, foodCategory, quantity, price, foodOrigin, ownerName, shortDesc, _id } = currentFood;

    return (
        <div className="py-2 md:py-5 w-[95%] mx-auto md:w-full">
            <div className="relative md:w-[50%] md:mx-auto flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border max-w-7xl mx-auto shadow-sky-900">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-56 lg:h-80 rounded-xl bg-clip-border">
                    <img
                        src={img}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased leading-relaxed text-blue-gray-900 font-extrabold">
                            {foodName}
                        </p>
                        <p className="block font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>
                    <p className="block font-sans text-base antialiased leading-relaxed text-blue-gray-900 font-bold">
                        <span className=''>Food owner</span> : {ownerName}
                    </p>
                    <p className="block font-sans text-base antialiased leading-relaxed text-blue-gray-900">
                        <span className=''>Food origin</span> : {foodOrigin}
                    </p>
                    <div className="flex flex-col justify-between mb-2">
                        <p className="block font-sans text-base antialiased leading-relaxed text-blue-gray-900">
                            <span className=''>Category</span> : {foodCategory}
                        </p>
                        <p className="block font-sans text-base antialiased leading-relaxed text-blue-gray-900">
                            <span className=''>Available Quantity</span> : {quantity}
                        </p>
                    </div>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {shortDesc}
                    </p>
                </div>
                <div className="p-6 pt-0">

                    <Link to={`/confirmOrder/${_id}`}>
                        <button
                            className="block w-full bg-sky-100 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Order
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default FoodOrderPage