import { Link } from 'react-router-dom';
import defaultProfile from '../../assets/icons/defaultProfile.jpg'
const UserInfo = () => {
    const user = true;
    return (
        <>
            <div className="flex-1 px-2 mx-2 justify-end lg:justify-center translate-y-1">

                {
                    user ?
                        <div className='flex items-center gap-2'>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="rounded-full ">
                                        <img className='rounded-full' src={defaultProfile} />
                                    </div>
                                </label>

                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li className='lg:hidden font-bold'><a>Salimullah</a></li>
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className='hidden -translate-y-1 lg:flex font-bold'>Salimullah</p>
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