/* eslint-disable react/no-unescaped-entities */
import Footer from "../../Components/Footer/Footer"
import Slider from "../../Components/Slider/Slider"
import OneWayDataBinding from "./OneWayDataBinding";
import Npm from "./Npm";
import Difference from "./Difference";
import { FaHandPointRight } from 'react-icons/fa';


const Blog = () => {
    return (
        <>
            <div>
                <Slider heading={'Blogs'} description={'Delve into the Flavorful World of In Touch Lajawab! Our blog is your passport to a gastronomic journey, culinary inspirations, and insights into the art of creating exquisite flavors. '} />
            </div>

            {/* question answering */}
            <div className="py-10 px-5 space-y-2 ">
                <div className="flex items-center gap-3 justify-center">
                    <FaHandPointRight className="text-3xl -translate-y-5 text-green-600" />
                    <h1 className="text-2xl mb-10 font-bold text-green-600">Examiner's asked questions...</h1>
                </div>
                <OneWayDataBinding />
                <Npm />
                <Difference />
            </div>
            <Footer />
        </>
    )
}

export default Blog