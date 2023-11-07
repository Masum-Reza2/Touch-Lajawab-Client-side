/* eslint-disable react/no-unescaped-entities */
import Footer from "../../Components/Footer/Footer"
import Slider from "../../Components/Slider/Slider"
import OneWayDataBinding from "./OneWayDataBinding";
import Npm from "./Npm";
import Difference from "./Difference";

const Blog = () => {
    return (
        <>
            <div>
                <Slider heading={'Blogs'} description={'Delve into the Flavorful World of In Touch Lajawab! Our blog is your passport to a gastronomic journey, culinary inspirations, and insights into the art of creating exquisite flavors. '} />
            </div>

            {/* question answering */}
            <div className="py-10 px-5 space-y-2">
                <OneWayDataBinding />
                <Npm />
                <Difference />
            </div>
            <Footer />
        </>
    )
}

export default Blog