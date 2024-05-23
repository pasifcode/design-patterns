import axios from "axios";
import { DeptMdCard } from "components/cards/DeptCard";
import { DeptAddForm } from "components/forms/DeptForm";
import Pagination from "components/shared/Pagination";
import { useEffect, useState } from "react";
import { DeptPage } from "types/dept";
import { BASE_URL } from "utils/requests";


export function DeptList() {

    const [value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [deptPage, setDeptPage] = useState<DeptPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/dept/page?page=${pageNumber}&name=${value}&size=20`)
            .then((response) => {
                setDeptPage(response.data);
            });
    }, [pageNumber, value]);

    return (
        <>
            <div className="container">
                <nav className="navbar row m-0">
                    <div className="col-12 col-md-4 col-xl-4 mb-2" >
                        <button data-bs-target="#addDeptModal" data-bs-toggle="modal" className="btn btn-success">Adicionar Departamento</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mt-2" >
                        <Pagination page={deptPage} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input
                                type="text"
                                id="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control"
                                placeholder="buscar departamentos..."
                            />
                        </div>
                    </div>
                </nav >

                <div className="row">
                    {deptPage.content?.filter((x) =>
                        x.name.toUpperCase().includes(value.toLocaleUpperCase()))
                        .map(x => (
                            <div key={x.id} className="col-12 col-md-6 col-xl-3 mb-3">
                                <DeptMdCard dept={x} />
                            </div>
                        ))}
                </div>
            </div>

            <div className="modal fade" id="addDeptModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Adicionar um novo departamento</label>
                            <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body"><DeptAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}