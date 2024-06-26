import axios from "axios";
import { PeopleMdCard } from "components/cards/PeopleCard";
import { PeopleAddForm } from "components/forms/PeopleForm";
import Pagination from "components/shared/Pagination";
import { useEffect, useState } from "react";
import { PeoplePage } from "types/people";
import { BASE_URL } from "utils/requests";


export function PeopleList() {
    const [value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [peoplePage, setPeoplePage] = useState<PeoplePage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/people/page?page=${pageNumber}&name=${value}&size=20`)
            .then((response) => {
                setPeoplePage(response.data);
            });
    }, [pageNumber, value]);

    return (
        <>
            <div className="container">
                <nav className="navbar row m-0">
                    <div className="col-12 col-md-4 col-xl-4 mb-2" >
                        <button data-bs-target="#addPeopleModal" data-bs-toggle="modal" className="btn btn-success">Adicionar Pessoa</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mt-2" >
                        <Pagination page={peoplePage} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input
                                type="text"
                                id="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control"
                                placeholder="buscar pessoas..."
                            />
                        </div>
                    </div>
                </nav >

                <div className="row">
                    {peoplePage.content?.filter((x) =>
                        x.name.toUpperCase().includes(value.toLocaleUpperCase()))
                        .map(x => (
                            <div key={x.id} className="col-12 col-md-6 col-xl-3 mb-3">
                                <PeopleMdCard people={x} />
                            </div>
                        ))}
                </div>
            </div>

            <div className="modal fade" id="addPeopleModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Adicionar uma nova pessoa</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><PeopleAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}
