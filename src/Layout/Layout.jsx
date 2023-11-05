import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Layout = () => {

    return (
        <div>
            <Header />
            <div className="min-h-[90vh]">
                <Outlet />
            </div>
            footer here
        </div>
    )
}

export default Layout