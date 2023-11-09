import Marquee from "react-fast-marquee";


import chef1 from '../../assets/crewandChefImg/img-1.jpg'
import chef2 from '../../assets/crewandChefImg/img-2.jpg'
import chef3 from '../../assets/crewandChefImg/img-3.jpg'
import chef4 from '../../assets/crewandChefImg/img-5.jpg'
import { FaFeatherAlt } from "react-icons/fa";
import useGlobal from "../../Hooks/useGlobal";

const CrewAndChefs = () => {
    const { mode } = useGlobal();

    const chefSlider = [
        { img: chef1, name: 'Danni wiyatt', occupation: 'Manager' },
        { img: chef2, name: 'Alice Capsey', occupation: 'Founder' },
        { img: chef3, name: 'Joe Root', occupation: 'Cook' },
        { img: chef4, name: 'Herry Brook', occupation: 'Finance Manager' },
    ]

    return (
        <div className='md:w-[90%] mx-auto pt-5' data-aos="fade-up-right">

            <div className={`px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 rounded-lg border-2 md:border-0 md:shadow-md  ${mode ? 'md:shadow-sky-500 text-gray-500' : 'md:shadow-sky-900'}`}>
                <div className="order-2 md:order-1">
                    <Marquee speed={30} pauseOnHover className="py-3 cursor-pointer">
                        {
                            chefSlider?.map((chef, index) => <div key={index}>
                                <img className="h-[50vh] md:h-[70vh] object-cover rounded-lg ml-10 md:ml-20" src={chef?.img} alt="" />
                                <p className="ml-10 md:ml-20 font-bold text-lg" >{chef.name}</p>
                                <p className="ml-10 md:ml-20" >{chef.occupation}</p>
                            </div>)
                        }
                    </Marquee>
                </div>

                <div className="flex flex-col items-center justify-center order-1 md:order-2 gap-4 py-5 md:gap-10 md:py-0">
                    <FaFeatherAlt className="text-5xl lg:text-6xl rotate-12" />
                    <h1 className='text-xl md:text-4xl text-center font-extrabold px-12'>Meet With Our Creative Crew & Chef</h1>
                    <p className="px-2 text-center lg:px-28">It’s the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean. Our proxiy to the abundant.</p>

                </div>
            </div>

        </div>
    )
}

export default CrewAndChefs