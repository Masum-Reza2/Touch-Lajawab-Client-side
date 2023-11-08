/* eslint-disable react/no-unescaped-entities */
import Footer from "../../Components/Footer/Footer"
import Slider from "../../Components/Slider/Slider"
import OneWayDataBinding from "./OneWayDataBinding";
import Npm from "./Npm";
import Difference from "./Difference";
import { FaHandPointRight } from 'react-icons/fa';

import blog1 from '../../assets/blog/black-amirican-410x500.jpg'
import blog2 from '../../assets/blog/food-5-410x500.jpg'
import blog3 from '../../assets/blog/food-blog-410x500.jpg'

const blogImages = [
    { img: blog1, name: 'Dinner', desc: 'Enjoy an exceptional journey of taste of joy.' },
    { img: blog2, name: 'Fast food', desc: 'How to eat tasty foods without losing your health.' },
    { img: blog3, name: 'Restaurant', desc: 'How to eat tasty foods without losing your health.' },
]


const Blog = () => {
    return (
        <>
            <div>
                <Slider heading={'Blogs'} description={'Delve into the Flavorful World of In Touch Lajawab! Our blog is your passport to a gastronomic journey, culinary inspirations, and insights into the art of creating exquisite flavors. '} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-10" >
                {
                    blogImages?.map((item, index) => <div className="relative" key={index} data-aos="zoom-in">

                        <div className="absolute z-10 h-20 w-20 bg-sky-500 right-2 top-2 text-white flex flex-col font-bold flex-none items-center justify-center rounded-md">
                            <p className="text-5xl">{index + 10}</p>
                            <h1 className="text-lg">Feb</h1>
                        </div>

                        <img className="rounded-lg cursor-pointer transition-all duration-300 hover:scale-105" src={item?.img} alt="" />
                        <div className="mt-2">
                            <h5 className="font-bold text-lg text-orange-500">{item.name}</h5>
                            <p className="text-gray-500 text-2xl">{item?.desc}</p>
                        </div>
                    </div>)
                }
            </div>

            {/* question answering */}
            <div className="py-10 px-5 space-y-2">
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