import { useEffect, useState } from "react";
import useSecureAxios from "../../Hooks/useSecureAxios"
import SingleFood from "./SingleFood";
import { useLoaderData } from "react-router-dom";
import { BiSolidSkipNextCircle } from 'react-icons/bi';
import Footer from "../../Components/Footer/Footer";
import MarqueeSlider from "../../Components/MarqueeSlider/MarqueeSlider";
import { BsSearch } from "react-icons/bs";
import Spinner from "../../Components/Spinner/Spinner";
import useGlobal from "../../Hooks/useGlobal";


const AllFoodItems = () => {
    const { mode } = useGlobal();
    const [allFoods, setAllFoods] = useState([]);
    const [itemsPerPage, setItemsPerpage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const secureAxios = useSecureAxios();

    // search functionality
    const [searchText, setSearchText] = useState('');

    // pagination
    const { count } = useLoaderData();
    const totalPages = Math.ceil(count / itemsPerPage);

    // making array for buttons
    const pagination = [...Array(totalPages).keys()];

    const handleItemsPerPage = e => {
        const val = Number.parseFloat(e.target.value)
        setItemsPerpage(val);

        // Resetting current page 
        setCurrentPage(1);
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        secureAxios.get(`/allFoods?page=${currentPage}&size=${itemsPerPage}&searchText=${searchText}`)
            .then(res => {
                setAllFoods(res?.data);
            })
            .catch(error => console.log(error))
    }, [itemsPerPage, currentPage, secureAxios, searchText])

    return (
        <>
            <MarqueeSlider allFoods={allFoods} />
            <div className=" py-2 lg:py-3">

                {/* search functionality */}
                <div className="flex items-center gap-2 justify-center py-5 relative w-fit mx-auto">
                    <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search by name,category or owner" className="input w-72 max-w-xs shadow-md shadow-sky-900 focus:outline-none" />
                    <BsSearch className="absolute right-1 text-gray-500" />
                </div>


                {
                    searchText ?
                        <h1 className={`text-center font-bold py-2 md:text-xl mb-5 ${mode ? 'text-gray-500' : ''}`}>Showing {allFoods.length} result{allFoods.length > 1 && `'s`} for {searchText}</h1>
                        :
                        <h1 className={`text-center font-bold py-2 md:text-xl mb-5 ${mode ? 'text-gray-500' : ''}`}>Showing {allFoods.length} out of {count} food items.</h1>
                }


                {
                    allFoods.length ?
                        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                allFoods.map(food => <SingleFood key={food?._id} food={food} />)
                            }
                        </div>
                        :
                        <div className="-translate-y-32 md:-translate-y-40">
                            <Spinner />
                        </div>
                }


                <div className="text-center py-5 space-x-5">
                    <p className={`pb-2 font-bold text-lg ${mode ? 'text-gray-400' : ''}`}>Current Page : {currentPage}</p>
                    <button onClick={handlePrev} className="btn translate-y-1">
                        <BiSolidSkipNextCircle className="text-xl rotate-180" />
                    </button>
                    {
                        pagination?.map((page, index) => <button
                            key={index}
                            className={`btn btn-outline ${mode ? 'text-white' : ''} ${currentPage === (page + 1) ? 'bg-sky-400 text-white font-bold' : ''}`}
                            onClick={() => setCurrentPage(page + 1)}
                        >
                            {page + 1}
                        </button>)
                    }
                    <button onClick={handleNext} className="btn translate-y-1">
                        <BiSolidSkipNextCircle className="text-xl" />
                    </button>

                    <select id="chooseItem" className="bg-orange-200 font-bold rounded-md py-3 cursor-pointer" value={itemsPerPage} onChange={handleItemsPerPage}>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllFoodItems