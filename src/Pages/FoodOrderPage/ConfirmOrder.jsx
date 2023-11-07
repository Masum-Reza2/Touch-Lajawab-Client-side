import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useGlobal from "../../Hooks/useGlobal";
import useSecureAxios from "../../Hooks/useSecureAxios";

const UpdateProduct = () => {
    const { user } = useGlobal();
    const currentFood = useLoaderData();
    const secureAxios = useSecureAxios();
    const navigate = useNavigate();

    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let currentDay = `${date}/${month}/${year}`

    const { foodName, img, foodCategory, quantity, price, foodOrigin, ownerName, ownerEmail, shortDesc, addedTime, _id } = currentFood;


    // const handleUpdateProduct = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const foodName = form.foodName.value;
    //     const img = form.foodImg.value;
    //     const foodCategory = form.foodCategory.value;
    //     const quantity = form.quantity.value;
    //     const price = form.price.value;
    //     const foodOrigin = form.foodOrigin.value;
    //     const ownerName = form.ownerName.value;
    //     const ownerEmail = form.ownerEmail.value;
    //     const shortDesc = form.shortDesc.value;
    //     const addedTime = form.addedTime.value;

    //     const newFood = { foodName, img, foodCategory, quantity, price, foodOrigin, ownerName, ownerEmail, shortDesc, addedTime };

    //     // sending to db
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: `You are going to update ${foodName}`,
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, Update it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             secureAxios.put(`/allFoods/${_id}?email=${user?.email}`, newFood)
    //                 .then(res => {
    //                     if (res?.data?.modifiedCount) {
    //                         Swal.fire(
    //                             'Updated!',
    //                             `${foodName} has been Updated.`,
    //                             'success'
    //                         )
    //                         navigate('/myAddedFoods');
    //                     }
    //                 })
    //                 .catch(error => console.log(error.message))
    //         }
    //         else {
    //             Swal.fire(
    //                 'Cancelled!',
    //                 'You cancelled the update.',
    //                 'success'
    //             )
    //         }
    //     })

    // }

    const handleConfirmOrder = e => {
        e.preventDefault();
        const form = e.target;
        const orderQuantity = parseFloat(form.orderQuantity.value);
        const availableQuantity = parseFloat(quantity);
        const buyerName = form?.buyerName?.value;
        const buyerEmail = form?.buyerEmail?.value;
        const buyingDate = form?.buyingDate?.value;


        // send this to db
        const confirmedFood = {
            buyerName, buyerEmail, buyingDate, orderQuantity,
            foodName, img, foodCategory, price, foodOrigin, ownerName, ownerEmail, shortDesc, addedTime,
        }

        // condition 1
        if (orderQuantity > availableQuantity || orderQuantity <= 0) {
            return Swal.fire(
                'Oops!',
                `Try to order within range (1- ${availableQuantity})`,
                'error'
            )
        }

        // condition 2 checking if it is user's added product
        if (ownerEmail === user?.email) {
            return Swal.fire(
                'Oops!',
                `You are trying to buy your own food item`,
                'error'
            )
        }

        // condition 3 proceed
        Swal.fire({
            title: 'Are you sure?',
            text: `Order ${foodName}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, order it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //  database activities here
                // console.log(confirmedFood)
                secureAxios.post(`/bookings?email=${user?.email}`, confirmedFood)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire(
                                'Completed!',
                                `Your order for ${foodName} has been completed!`,
                                'success'
                            )
                            form.reset();
                            navigate('/myOrderedFoods');
                        }
                    })
                    .catch(error => {
                        Swal.fire(
                            'Oops!',
                            `Something went wrong`,
                            'error'
                        )
                    })
            }
            else {
                Swal.fire(
                    'Cancelled!',
                    `Order cancelled for ${foodName}`,
                    'error'
                )
            }
        })

    }


    return (
        <div className={`w-[90%] mx-auto py-5 min-h-screen md:min-h-[80vh] flex flex-col items-center justify-center`}>
            <h1 className="py-2 md:py-5 font-semibold ">Place order for - {foodName}.</h1>
            <form onSubmit={handleConfirmOrder} className="space-y-3">
                {/* image and name */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-green-100">Food Name</span>
                        <input required type="text" name="foodName" readOnly defaultValue={foodName} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-green-100">Food-origin(country)</span>
                        <input required type="text" name="foodOrigin" readOnly defaultValue={foodOrigin} className="input input-bordered" />
                    </label>
                </div>
                {/* brandName and price */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-green-100">Buyer-Name</span>
                        <input defaultValue={user?.displayName} required type="text" name="buyerName" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-green-100">Buyer-Email</span>
                        <input required type="text" name="buyerEmail" defaultValue={user?.email} className="input input-bordered" />
                    </label>
                </div>
                {/* price and shortDesc */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-green-100">$Price</span>
                        <input required type="text" name="price" readOnly defaultValue={price} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-green-100">Buying date</span>
                        <input required type="text" readOnly name="buyingDate" defaultValue={currentDay} className="input input-bordered" />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-green-100">Available Quantity</span>
                        <input required type="text" name="quantity" readOnly defaultValue={quantity} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span className="bg-green-100">Order Quantity</span>
                        <input required type="number" name="orderQuantity" className="input input-bordered" placeholder={`Enter quantity for ${foodName}`} />
                    </label>

                </div>

                <div className="text-center py-3">
                    <button className="btn bg-green-300 text-black" type="submit">Purchase</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct