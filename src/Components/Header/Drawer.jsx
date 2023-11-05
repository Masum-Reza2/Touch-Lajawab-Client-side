import PropTypes from 'prop-types';
const Drawer = ({ navLinks }) => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-56 sm:w-80 z-50 min-h-full bg-base-200">
                {/* Sidebar content here */}
                {navLinks}
            </ul>
        </div>
    )
}



Drawer.propTypes = {
    navLinks: PropTypes.node,
}
export default Drawer