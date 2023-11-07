import { NavLink } from "react-router-dom";
import logo from '../../assets/icons/Restaurant-icon.png'
import Drawer from "./Drawer";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

const Header = () => {

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allfood'}>All food items</NavLink></li>
        <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
        <li><NavLink to={'/users'}>Users</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-sky-300">

                    <Hamburger />
                    <Logo logo={logo} />

                    {/* user info's */}
                    <UserInfo />

                    <Navbar navLinks={navLinks} />

                </div>
                {/* Page content here */}
            </div>
            <Drawer navLinks={navLinks} />
        </div>
    )
}

export default Header