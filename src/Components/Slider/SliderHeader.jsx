/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const SliderHeader = ({ heading, description }) => {
    return (
        <div className='absolute h-full w-full px-2 text-gray-100 flex flex-col items-center justify-center z-10'>
            <h1 className='text-2xl md:text-5xl font-bold'>{heading}</h1>
            <p className='text-sm text-justify md:text-lg md:px-28 lg:px-80'>{description}</p>
            <Link to={'/allfood'}>
                <button className="btn btn-sm mt-2 md:btn-md bg-sky-300 hover:bg-sky-400 border-none">Order Now</button>
            </Link>
        </div>
    )
}

SliderHeader.propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
}
export default SliderHeader