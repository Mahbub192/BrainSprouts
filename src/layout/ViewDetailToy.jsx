import { Outlet } from "react-router-dom";
import NaveBar from "../shared/NaveBar/NaveBar";
import Footer from "../shared/Footer/Footer";

const ViewDetailToy = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ViewDetailToy;