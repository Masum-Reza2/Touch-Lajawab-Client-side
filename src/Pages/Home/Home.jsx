import Footer from "../../Components/Footer/Footer"
import Slider from "../../Components/Slider/Slider"
import TopSellingFoods from "../../Components/TopSellingFoods/TopSellingFoods"

const Home = () => {
    return (
        <div>
            <Slider heading={'Hello World!'} description={`Welcome to Touch Lajawab, where culinary art meets delightful flavors. Join us for an unforgettable dining experience that's simply 'Lajawab' – beyond compare!`} />

            <TopSellingFoods />
            <p>2 + extra atractive section</p>
            <Footer />
        </div>
    )
}

export default Home