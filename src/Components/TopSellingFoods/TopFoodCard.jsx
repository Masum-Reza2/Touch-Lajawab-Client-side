import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const TopFoodCard = ({ food }) => {
    const { foodName, img, foodCategory, price, shortDesc, _id } = food;
    return (
        <div className="card bg-base-100 shadow-xl image-full"
            data-aos="fade-right"
        // data-aos-duration="1000"
        >
            <figure><img src={img} alt={`image of ${foodName}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <div>
                    <p>Food Category : {foodCategory}</p>
                    <p>Price : ${price}</p>
                </div>

                <p>{shortDesc.slice(0, 60)}...</p>

                <div className="card-actions justify-end">
                    <Link to={`/orderFood/${_id}`}>
                        <button className="btn btn-sm lg:btn-md bg-purple-200 border-0 text-gray-600">Details</button>
                    </Link>
                    <Link to={'/allfood'}>
                        <button className="btn btn-sm lg:btn-md bg-red-200 border-0 text-gray-600">See all</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

TopFoodCard.propTypes = {
    food: PropTypes.object,
}
export default TopFoodCard