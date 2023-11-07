/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

const SliderHeader = () => {
    return (
        <div className='absolute h-full w-full px-2 text-gray-100 flex flex-col items-center justify-center z-10'>
            <h1 className='text-2xl md:text-5xl font-bold'>Hello World!</h1>
            <p className='text-sm text-justify md:text-lg md:px-28 lg:px-80'>Welcome to Touch Lajawab, where culinary art meets delightful flavors. Join us for an unforgettable dining experience that's simply 'Lajawab' – beyond compare!</p>
            <Link to={'/allfood'}>
                <button className="btn btn-sm mt-2 md:btn-md bg-sky-300 hover:bg-sky-400 border-none">Order Now</button>
            </Link>
        </div>
    )
}

export default SliderHeader