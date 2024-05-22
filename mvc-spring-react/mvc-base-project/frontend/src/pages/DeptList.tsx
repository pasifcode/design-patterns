import axios from "axios";
import { DeptMdCard, DeptRelationSmCard, DeptSmCard } from "components/cards/DeptCard";
import { PeopleSmCard } from "components/cards/PeopleCard";
import { DeptAddForm, DeptRelationAddForm } from "components/forms/DeptForm";
import Pagination from "components/shared/Pagination";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DeptPage, DeptRelationPage } from "types/dept";
import { Props } from "types/main";
import { PeoplePage } from "types/people";
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
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><DeptAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function DeptHomeList() {

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

export function DeptRelationList({ id: deptId }: Props) {

const params = useParams();
    const [deptRelationPage, setDeptPage] = useState<DeptRelationPage>({ content: [], number: 0 });
    useEffect(() => {
        axios.get(`${BASE_URL}/dept-relation/page/${deptId}`)
            .then(response => {
                setDeptPage(response.data);
            });
    }, [deptId]);


    return (
        <>
            <div className="card-sm-box">
                <div className="py-3 d-flex justify-content-between">
                    <h4 className="card-title">Departamentos Relacionados</h4>
                        <button data-bs-target="#addDeptRelationModal" data-bs-toggle="modal" className="btn btn-success">Adicionar</button>
                </div>
                {deptRelationPage.empty ? <h5>Nenhum Item Adicionado</h5> :
                    <div className="row">
                        {deptRelationPage.content?.map(deptRelation => (
                            <div key={deptRelation.id} className="col-12 mb-2">
                                <DeptRelationSmCard deptRelation={deptRelation} />
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div className="modal fade" id="addDeptRelationModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Adicionar um novo departamento</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><DeptRelationAddForm id={`${params.deptId}`}/></div>
                    </div>
                </div>
            </div>
        </>
    );
}

