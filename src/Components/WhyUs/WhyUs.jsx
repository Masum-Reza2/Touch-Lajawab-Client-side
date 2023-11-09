import useGlobal from "../../Hooks/useGlobal"
import WhyUsCard from "./WhyUsCard"

const whyUsInfo = [
    {
        img: 'https://i.ibb.co/3fp6Q4s/Exclusive-Design-removebg-preview.png',
        title: 'Exclusive Design',
        desc: 'Elevate your events with captivating and exclusive designs.'
    },
    {
        img: 'https://i.ibb.co/ky7K780/Client-Focused-removebg-preview.png',
        title: 'Client Focused',
        desc: `Your vision is our priority; we're dedicated to your satisfaction.`
    },
    {
        img: 'https://i.ibb.co/gDF5WQf/Fresh-Ingredients.png',
        title: 'Fresh Ingredients',
        desc: 'We create delightful experiences with the freshest ingredients.'
    },
    {
        img: 'https://i.ibb.co/7Q5kSSW/Diverse-Client-Base-removebg-preview.png',
        title: 'Diverse Client Base',
        desc: 'Our expertise caters to a wide range of events and preferences.'
    },
    {
        img: 'https://i.ibb.co/m6m3bTx/Responsible-Sourcing-removebg-preview.png',
        title: 'Responsible Sourcing',
        desc: `We're committed to eco-friendly and ethical event solutions.`
    },
    {
        img: 'https://i.ibb.co/vB4h70C/Flexible-Services-removebg-preview.png',
        title: 'Flexible Services',
        desc: 'Tailored event planning to meet your unique needs.'
    },
]

const WhyUs = () => {
    const { mode } = useGlobal();
    return (
        <div className="py-10 w-[90%] mx-auto space-y-5" data-aos="fade-down">
            <div className={`text-center text-lg md:text-2xl font-bold py-3 rounded-t-3xl mt-5  flex items-center justify-center gap-2 ${mode ? 'bg-black text-gray-500' : 'bg-sky-200'}`}>
                <h1 className="text-2xl md:text-5xl">Why Us?</h1>
            </div>

            <p className={`text-sm md:text-base ${mode ? 'text-gray-500' : ''}`}>FOR ALL YOUR CATERING NEEDS.</p>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {
                    whyUsInfo.map((whyUs, index) => <WhyUsCard whyUs={whyUs} key={index} />)
                }
            </div>
            <div className={`border-b-2 py-5 rounded-b-3xl mb-5  ${mode ? 'bg-black' : 'bg-sky-200'}`}></div>
        </div>
    )
}

export default WhyUs