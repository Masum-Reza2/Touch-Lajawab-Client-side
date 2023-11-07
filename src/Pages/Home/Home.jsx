import Footer from "../../Components/Footer/Footer"
import Slider from "../../Components/Slider/Slider"

const Home = () => {
    return (
        <div>
            <Slider heading={'Hello World!'} description={`Welcome to Touch Lajawab, where culinary art meets delightful flavors. Join us for an unforgettable dining experience that's simply 'Lajawab' – beyond compare!`} />
            <section>
                <p>6 top selling products</p>
                <p>2 + extra atractive section</p>
                <Footer />
            </section>
        </div>
    )
}

export default Home