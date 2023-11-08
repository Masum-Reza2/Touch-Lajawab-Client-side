import CrewAndChefs from "../../Components/CrewAndChefs/CrewAndChefs"
import Footer from "../../Components/Footer/Footer"
import Slider from "../../Components/Slider/Slider"
import TopSellingFoods from "../../Components/TopSellingFoods/TopSellingFoods"
import WhyUs from "../../Components/WhyUs/WhyUs"

const Home = () => {
    return (
        <div>
            <Slider heading={'Hello World!'} description={`Welcome to Touch Lajawab, where culinary art meets delightful flavors. Join us for an unforgettable dining experience that's simply 'Lajawab' – beyond compare!`} />

            <TopSellingFoods />
            <CrewAndChefs />
            <WhyUs />
            <Footer />
        </div>
    )
}

export default Home