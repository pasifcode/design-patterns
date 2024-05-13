import Footer from "components/shared/Footer";
import Navbar from "components/shared/Navbar";
import { PeopleHomeList } from "./PeopleList";
import { DeptHomeList } from "./DeptList";

function Home() {
    return (
        <>
            <div className="container m-20">
                <div className="row m-0 p-3 d-flex ">
                    <div className="col-12 col-lg-6"><PeopleHomeList /></div>
                    <div className="col-12 col-lg-6"><DeptHomeList /></div>
                </div>
            </div>
        </>
    );
}

export default Home;