import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import useSecureAxios from "../../Hooks/useSecureAxios";
import toast from "react-hot-toast";
import useGlobal from "../../Hooks/useGlobal";

const OrderedItems = ({ card, refetch, index }) => {
    const { user } = useGlobal();
    const { foodName, img, price, ownerName, addedTime, orderQuantity, _id } = card;
    const secureAxios = useSecureAxios();

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You are going to delete ${foodName}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //  db activities here
                secureAxios.delete(`/bookings/${_id}?email=${user?.email}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                `${foodName} has been deleted.`,
                                'success'
                            )
                            //  refetch after succesfull delete
                            refetch();
                        }
                    })
                    .catch(error => {
                        toast.error(`Oops something went wrong!`);
                    })
            }
            else {
                Swal.fire(
                    'Cancelled!',
                    `You cancelled deletion for ${foodName}`,
                    'error'
                )
            }
        })
    }

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt={`image of `} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {foodName}
            </td>
            <td>{addedTime}</td>
            <td>{price}</td>
            <td>{ownerName}</td>
            <td>{orderQuantity} times</td>
            <th>
                <button onClick={handleDelete} className="btn-xs hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]">
                    <AiOutlineDelete className="text-xl -translate-y-[0.10rem] text-gray-500" />
                </button>
            </th>
        </tr>
    )
}


OrderedItems.propTypes = {
    card: PropTypes.object,
    index: PropTypes.number,
    refetch: PropTypes.func,
}
export default OrderedItems