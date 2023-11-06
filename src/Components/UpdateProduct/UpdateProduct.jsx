import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useSecureAxios from "../../Hooks/useSecureAxios";
import useGlobal from "../../Hooks/useGlobal";

const UpdateProduct = () => {
    const { user } = useGlobal();
    const oldFood = useLoaderData();
    const secureAxios = useSecureAxios();
    const navigate = useNavigate();

    const { foodName, img, foodCategory, quantity, price, foodOrigin, ownerName, ownerEmail, shortDesc, addedTime, _id } = oldFood;


    const handleUpdateProduct = e => {
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

        const newFood = { foodName, img, foodCategory, quantity, price, foodOrigin, ownerName, ownerEmail, shortDesc, addedTime };

        // sending to db
        Swal.fire({
            title: 'Are you sure?',
            text: `You are going to update ${foodName}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxios.put(`/allFoods/${_id}?email=${user?.email}`, newFood)
                    .then(res => {
                        if (res?.data?.modifiedCount) {
                            Swal.fire(
                                'Updated!',
                                `${foodName} has been Updated.`,
                                'success'
                            )
                            navigate('/myAddedFoods');
                        }
                    })
                    .catch(error => console.log(error.message))
            }
            else {
                Swal.fire(
                    'Cancelled!',
                    'You cancelled the update.',
                    'success'
                )
            }
        })

    }


    return (
        <div className={`w-[90%] mx-auto py-5 min-h-screen md:min-h-[80vh] flex flex-col items-center justify-center`}>
            <h1 className="py-2 md:py-5 font-semibold underline">Update - {foodName}.</h1>
            <form onSubmit={handleUpdateProduct} className="space-y-3">
                {/* image and name */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Food Name</span>
                        <input required type="text" name="foodName" defaultValue={foodName} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Food Image Url</span>
                        <input required type="text" name="foodImg" defaultValue={img} className="input input-bordered" />
                    </label>
                </div>
                {/* brandName and price */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Food Category</span>
                        <input required type="text" name="foodCategory" defaultValue={foodCategory} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Quantity</span>
                        <input required type="text" name="quantity" defaultValue={quantity} className="input input-bordered" />
                    </label>
                </div>
                {/* price and shortDesc */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Price</span>
                        <input required type="text" name="price" defaultValue={price} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Food-origin(country)</span>
                        <input required type="text" name="foodOrigin" defaultValue={foodOrigin} className="input input-bordered" />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Owner-Name</span>
                        <input defaultValue={ownerName} readOnly required type="text" name="ownerName" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Owner-Email</span>
                        <input defaultValue={ownerEmail} readOnly required type="text" name="ownerEmail" className="input input-bordered" />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Short-Description</span>
                        <input required type="text" name="shortDesc" defaultValue={shortDesc} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-sky-100">Added-Time</span>
                        <input required type="text" readOnly name="addedTime" defaultValue={addedTime} className="input input-bordered" />
                    </label>
                </div>

                <div className="text-center py-3">
                    <button className="btn bg-sky-100 text-black" type="submit">Update Food</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct