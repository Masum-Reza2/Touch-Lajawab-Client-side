const Navbar = ({ navLinks }) => {
    return (
        <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navLinks}
            </ul>
        </div>
    )
}

export default Navbar