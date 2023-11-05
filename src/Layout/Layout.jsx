import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div>
            header here
            <div className="min-h-[90vh]">
                <Outlet />
            </div>
            footer here
        </div>
    )
}

export default Layout