import Marquee from "react-fast-marquee";
import PropTypes from 'prop-types'; // ES6


const MarqueeSlider = ({ allFoods }) => {
    return (
        <>
            <div>
                <Marquee speed={40} className="py-3 bg-black ">
                    {
                        allFoods?.map(food => <img key={food?._id} className="h-[30vh] md:h-[40vh] object-cover brightness-50 rounded-lg ml-10 md:ml-20" src={food?.img} alt="" />)
                    }
                </Marquee>
            </div>
        </>
    )
}


MarqueeSlider.propTypes = {
    allFoods: PropTypes.array,
}
export default MarqueeSlider