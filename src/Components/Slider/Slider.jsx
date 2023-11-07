import slider1 from '../../assets/bannerSlider/slider1.jpg'
import slider2 from '../../assets/bannerSlider/slider2.jpg'
import slider3 from '../../assets/bannerSlider/slider3.jpg'
import slider4 from '../../assets/bannerSlider/slider4.jpg'
import SliderHeader from './SliderHeader'
import PropTypes from 'prop-types';


const Slider = ({ heading, description }) => {

    return (
        <div>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full md:h-[70vh]">
                    <img src={slider4} className="w-full brightness-50 object-cover" />
                    <div className="absolute flex justify-center transform bottom-2 right-2 gap-2 z-20">
                        <a href="#slide4" className="btn btn-circle btn-sm md:btn-md">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">❯</a>
                    </div>
                    <SliderHeader heading={heading} description={description} />
                </div>

                <div id="slide2" className="carousel-item relative w-full md:h-[70vh]">
                    <img src={slider2} className="w-full brightness-50 object-cover" />
                    <div className="absolute flex justify-center transform bottom-2 right-2 gap-2 z-20">
                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md ">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-sm md:btn-md ">❯</a>
                    </div>
                    <SliderHeader heading={heading} description={description} />
                </div>

                <div id="slide3" className="carousel-item relative w-full md:h-[70vh]">
                    <img src={slider3} className="w-full brightness-50 object-cover" />
                    <div className="absolute flex justify-center transform bottom-2 right-2 gap-2 z-20">
                        <a href="#slide2" className="btn btn-circle btn-sm md:btn-md ">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-sm md:btn-md ">❯</a>
                    </div>
                    <SliderHeader heading={heading} description={description} />
                </div>

                <div id="slide4" className="carousel-item relative w-full md:h-[70vh]">
                    <img src={slider1} className="w-full brightness-50 object-cover" />
                    <div className="absolute flex justify-center transform bottom-2 right-2 gap-2 z-20">
                        <a href="#slide3" className="btn btn-circle btn-sm md:btn-md ">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md ">❯</a>
                    </div>
                    <SliderHeader heading={heading} description={description} />
                </div>
            </div>
        </div>
    )
}

Slider.propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
}
export default Slider