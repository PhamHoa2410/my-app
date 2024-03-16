import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Navigation/Header";
const IndexPage = () => {

    return (
        <div className="container--root">
            <Header />
            <div className="container-page">
                <div className="content">
                    <div className="right-side">
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default IndexPage;
