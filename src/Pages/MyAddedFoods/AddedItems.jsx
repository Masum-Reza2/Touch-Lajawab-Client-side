import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSecureAxios from "../../Hooks/useSecureAxios";
import useGlobal from "../../Hooks/useGlobal";

const AddedItems = ({ card, index, refetch }) => {
    const { user } = useGlobal();
    const { foodName, img, quantity, price, foodOrigin, ownerName, _id } = card;
    const secureAxios = useSecureAxios();

    const handleDelete = (id) => {
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
                secureAxios.delete(`/allFoods/${id}?email=${user?.email}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                `You have deleted food ${foodName}`,
                                'success'
                            );
                            refetch();
                        }
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            }
            else {
                Swal.fire(
                    'Cancelled!',
                    `You have cancelled deletion for food ${foodName}.`,
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
                            <img src={img} alt={`image of ${foodName}`} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {foodName}
            </td>
            <td>{foodOrigin}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>{ownerName}</td>
            <th>
                <Link to={`/update/${_id}`}>
                    <button className="btn-xs hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]">
                        <AiFillEdit className="text-2xl text-gray-500" />
                    </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn-xs hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]">
                    <AiOutlineDelete className="text-xl -translate-y-[0.10rem] text-gray-500" />
                </button>
            </th>
        </tr>
    )
}

AddedItems.propTypes = {
    card: PropTypes.object,
    index: PropTypes.number,
    refetch: PropTypes.func,
}
export default AddedItems