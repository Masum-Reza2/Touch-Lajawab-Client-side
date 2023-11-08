import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Spinner from "../Components/Spinner/Spinner";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';
import useGlobal from "../Hooks/useGlobal";
AOS.init();

const Layout = () => {
    const { mode } = useGlobal();
    const navigation = useNavigation();
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = `Touch Lajawab${pathname === '/' ? '-Home' : pathname.replace('/', '-')}`
    }, [pathname])

    return (
        <div className={`scroll-smooth ${mode && 'bg-sky-900'}`}>
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