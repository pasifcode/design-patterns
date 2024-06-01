import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PeopleList} from "../pages/lists/PeopleList";
import { PeopleProfile } from "pages/profiles/PeopleProfile";
import { DeptList } from "pages/lists/DeptList";
import { DeptProfile } from "pages/profiles/DeptProfile";
import Home from "pages/main/Home";
import Navbar from "components/shared/Navbar";
import Footer from "components/shared/Footer";

function PageRoutes() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people-list" element={<PeopleList />} />
                <Route path="/people" >
                    <Route path=":peopleId" element={<PeopleProfile />} />
                </Route>
                <Route path="/dept-list" element={<DeptList />} />
                <Route path="/dept" >
                    <Route path=":deptId" element={<DeptProfile />} />
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default PageRoutes;