import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Spinner from "../Components/Spinner/Spinner";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    const navigation = useNavigation();
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = `Touch Lajawab${pathname === '/' ? '-Home' : pathname.replace('/', '-')}`
    }, [pathname])

    return (
        <div className="scroll-smooth">
            {/* package items */}
            <Toaster />

            <Header />
            {
                navigation.state === "loading" ?
                    <Spinner />
                    :
                    <div className="min-h-[90vh]">
                        <Outlet />
                    </div>
            }

        </div>
    )
}

export default Layout