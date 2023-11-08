import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';


const SingleFood = ({ food }) => {

    const { foodName, img, foodCategory, quantity, price, shortDesc, _id, soldCount } = food;

    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md shadow-sky-900 rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-56 lg:h-64 rounded-xl bg-clip-border">
                <img
                    src={img}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {foodName}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        ${price}
                    </p>
                </div>
                <div className="flex flex-col justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        <span>Category</span> : {foodCategory}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        <span>Sold</span> : {soldCount}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        <span>Available Quantity</span> : {quantity}
                    </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {shortDesc.slice(0, 100)}<span className='font-semibold'>...</span>
                </p>
            </div>
            <div className="p-6 pt-0">
                <Link to={`/orderFood/${_id}`}>
                    <button
                        className="block w-full bg-sky-100 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Details
                    </button>
                </Link>
            </div>
        </div>
    )
}

SingleFood.propTypes = {
    food: PropTypes.object,

}
export default SingleFood