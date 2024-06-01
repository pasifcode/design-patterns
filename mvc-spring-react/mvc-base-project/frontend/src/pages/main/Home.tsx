import axios from "axios";
import { DeptSmCard } from "components/cards/DeptCard";
import { PeopleSmCard } from "components/cards/PeopleCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeptPage } from "types/dept";
import { PeoplePage } from "types/people";
import { BASE_URL } from "utils/requests";

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

    function DeptHomeList() {
        const [deptPage, setDeptPage] = useState<DeptPage>({
            content: [],
            number: 0
        });
        useEffect(() => {
            axios.get(`${BASE_URL}/dept/page?size=10`)
                .then((response) => {
                    setDeptPage(response.data);
                });
        }, []);

        return (
            <>
                <div className="card-sm-box ">
                    <div className="p-2  d-flex justify-content-between">
                        <h4 className="card-title">Departamentos</h4>
                        <Link to={"/dept-list"}>Ver lista</Link>
                    </div>
                    <div className="row">
                        {deptPage.content?.map(x => (
                            <div key={x.id} className="col-12 mb-2">
                                <DeptSmCard dept={x} />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
    
    function PeopleHomeList() {

        const [peoplePage, setPeoplePage] = useState<PeoplePage>({
            content: [],
            number: 0
        });
        useEffect(() => {
            axios.get(`${BASE_URL}/people/page?size=10`)
                .then((response) => {
                    setPeoplePage(response.data);
                });
        }, []);

        return (
            <>
                <div className="card-sm-box ">
                    <div className="p-2 d-flex justify-content-between">
                        <h4 className="card-title">Pessoas</h4>
                        <Link to={"/people-list"}>Ver lista</Link>
                    </div>
                    <div className="row">
                        {peoplePage.content?.map(x => (
                            <div key={x.id} className="col-12 mb-2">
                                <PeopleSmCard people={x} />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Home;