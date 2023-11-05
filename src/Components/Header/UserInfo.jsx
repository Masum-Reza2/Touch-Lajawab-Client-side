import { Link, useNavigate } from 'react-router-dom';
import defaultProfile from '../../assets/icons/defaultProfile.jpg'
import useGlobal from '../../Hooks/useGlobal';
import toast from 'react-hot-toast';
const UserInfo = () => {
    const navigate = useNavigate();
    const { user, logOutUser } = useGlobal();
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success(`Log out successfull.`);
                navigate('/login');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }
    return (
        <>
            <div className="flex-1 px-2 mx-2 justify-end lg:justify-center translate-y-1">

                {
                    user ?
                        <div className='flex items-center gap-2'>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="rounded-full ">
                                        <img className='rounded-full' src={user?.photoURL || defaultProfile} />
                                    </div>
                                </label>

                                <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li className='lg:hidden font-bold'><a>{user?.displayName || 'Kuddus Ali'}</a></li>

                                    <Link to={'/myAddedFoods'}>
                                        <li><p>My added food items</p></li>
                                    </Link>
                                    <Link to={'myOrderedFoods'}>
                                        <li><p>My ordered food items</p></li>
                                    </Link>
                                    <Link to={'addAfood'}>
                                        <li><p>Add a food item</p></li>
                                    </Link>
                                    <li className='font-bold' onClick={handleLogOut}><p>Logout</p></li>

                                </ul>
                            </div>
                            <div>
                                <p className='hidden -translate-y-1 lg:flex font-bold'>{user?.displayName || 'Kuddus Ali'}</p>
                            </div>
                        </div>
                        :
                        <Link to={'/login'}>
                            <button className='-translate-y-1 btn btn-outline'>Login</button>
                        </Link>
                }

            </div>
        </>
    )
}

export default UserInfo