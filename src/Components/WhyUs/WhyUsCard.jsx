import PropTypes from 'prop-types';

const WhyUsCard = ({ whyUs }) => {
    const { img, title, desc } = whyUs;
    return (
        <div className='border flex flex-col items-center text-center h-full w-full rounded-lg shadow-md py-2 transition-all duration-500 cursor-pointer hover:-translate-y-1 shadow-gray-400 bg-sky-100 space-y-2'
            data-aos="flip-left"
            data-aos-duration="1000"
        >
            <div>
                <img className='h-[12vh]' src={img} alt={`image of ${title}`} />
            </div>
            <div className='text-start px-2'>
                <h5 className='font-semibold text-gray-500'>{title}</h5>
                <p className='text-gray-600'>{desc}</p>
            </div>
        </div>
    )
}

WhyUsCard.propTypes = {
    whyUs: PropTypes.object,
}
export default WhyUsCard