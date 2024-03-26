import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto mb-8">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;