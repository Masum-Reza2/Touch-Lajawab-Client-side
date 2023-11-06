import { useState } from "react";
import useGlobal from "../../Hooks/useGlobal";
import useSecureAxios from "../../Hooks/useSecureAxios";
import toast from "react-hot-toast";

const AddAfood = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let currentDay = `${date}/${month}/${year}`

    const [today, setToday] = useState(currentDay);
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const img = form.foodImg.value;
        const foodCategory = form.foodCategory.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const foodOrigin = form.foodOrigin.value;
        const ownerName = form.ownerName.value;
        const ownerEmail = form.ownerEmail.value;
        const shortDesc = form.shortDesc.value;
        const addedTime = form.addedTime.value;

        const newFoodItem = { foodName, img, foodCategory, quantity, price, foodOrigin, ownerName, ownerEmail, shortDesc, addedTime };
        // console.log(newFoodItem);

        // sending to db
        secureAxios.post('/allFoods', newFoodItem)
            .then(result => {
                if (result.data.insertedId) {
                    toast.success(`Food item ${foodName} added successfully!`)
                }
            })
            .catch(error => toast.error('Oops something went wrong'))
    }


    return (
        <div className={`w-[90%] mx-auto py-5 min-h-screen md:min-h-[80vh] flex flex-col items-center justify-center`}>
            <h1 className="py-2 md:py-5 font-semibold underline">Add a food item.</h1>
            <form onSubmit={handleAddProduct} className="space-y-3">
                {/* image and name */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Food Name</span>
                        <input required type="text" name="foodName" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Food Image Url</span>
                        <input required type="text" name="foodImg" className="input input-bordered" />
                    </label>
                </div>
                {/* brandName and price */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Food Category</span>
                        <input required type="text" name="foodCategory" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Quantity</span>
                        <input required type="text" name="quantity" className="input input-bordered" />
                    </label>
                </div>
                {/* price and shortDesc */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Price</span>
                        <input required type="text" name="price" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Food-origin(country)</span>
                        <input required type="text" name="foodOrigin" className="input input-bordered" />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Owner-Name</span>
                        <input defaultValue={user?.displayName} readOnly required type="text" name="ownerName" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Owner-Email</span>
                        <input defaultValue={user?.email} readOnly required type="text" name="ownerEmail" className="input input-bordered" />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Short-Description</span>
                        <input required type="text" name="shortDesc" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Added-Time</span>
                        <input required type="text" readOnly defaultValue={today} name="addedTime" className="input input-bordered" />
                    </label>
                </div>

                <div className="text-center py-3">
                    <button className="btn bg-sky-100 text-black" type="submit">Add Food</button>
                </div>
            </form>
        </div>
    )
}

export default AddAfood