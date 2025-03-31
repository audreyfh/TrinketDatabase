import {Outlet} from "react-router-dom";
import Title from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";
function Layout() {
    return (
        <>
            <Title />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;