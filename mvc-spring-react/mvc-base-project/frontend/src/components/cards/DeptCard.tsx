import axios from "axios";
import { DeptEditForm, DeptRelationEditForm } from "components/forms/DeptForm";
import { PeopleEditForm } from "components/forms/PeopleForm";
import Footer from "components/shared/Footer";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Dept, DeptProps, DeptRelationProps } from "types/dept";
import { Props } from "types/main";
import { PeopleProps, People } from "types/people";
import { BASE_URL } from "utils/requests";

export function DeptMdCard({ dept }: DeptProps) {

    return (
        <>
            <Link to={`/dept/${dept.id}`} className="text-decoration-none">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{dept.name}</h5>
                        <p className="card-text">{dept.description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export function DeptLgCard({ id: deptId }: Props) {

    const navigate = useNavigate();
    const params = useParams();
    const [dept, setDept] = useState<Dept>();
    useEffect(() => {
        axios.get(`${BASE_URL}/dept/${deptId}`)
            .then((response) => {
                setDept(response.data);
            });
    }, [deptId]);

    const deleteDept = () => {
        axios.delete(`${BASE_URL}/dept/delete/${deptId}`)
            .then((response) => {
                navigate("/dept-page");
            })
    }

    return (
        <>
            <div className="card mb-3" >
                <div className="g-0">
                    <div>
                        <div className="card-body">
                            <h5 className="card-title">{dept?.name}</h5>
                            <p className="card-text">{dept?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="d-flex justify-content-start mb-4">
                <button className="btn btn-primary" data-bs-target="#deptEditModal" data-bs-toggle="modal">
                    Editar
                </button>
                <button className="btn btn-danger" data-bs-target="#deptDeleteModal" data-bs-toggle="modal">
                    Deletar
                </button>
            </nav>
            <div className="modal fade" id="deptEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Editar</label>
                        </div>
                        <div className="modal-body"><DeptEditForm id={`${params.deptId}`} /></div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deptDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Deseja deletar este departamento ?</label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                            <button onClick={() => deleteDept()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function DeptSmCard({ dept }: DeptProps) {

    return (
        <>

            <Link to={`/dept/${dept.id}`}>
                <div className="card-sm-container">
                    <div className="card-body">
                        <h5>{dept.name}</h5>
                        <p>{dept.description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export function DeptRelationSmCard({ deptRelation }: DeptRelationProps) {

    const navigate = useNavigate();
    const params = useParams();
    const deleteDeptRelation = () => {
        axios.delete(`${BASE_URL}/dept-relation/delete/${deptRelation.id}`)
            .then((response) => {
                navigate(0);
            })
    }

    return (
        <>
            <div className="card-title" data-bs-toggle="modal" data-bs-target="#deptRelationProfileModal" data-bs-dismiss="modal">
                <div className="card-sm-container">
                    <div className="card-body">
                        <h5>{deptRelation.relatedDeptName}</h5>
                        <p>{deptRelation.description}</p>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deptRelationProfileModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Derpartamento Relacionado</label>
                        </div>
                        <div className="modal-body">
                            <Link to={`/dept/${deptRelation.relatedDeptId}`}>
                                <h5>{deptRelation.relatedDeptName}</h5>
                            </Link>
                            <h6>{deptRelation.description}</h6>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deptRelationEditModal" data-bs-dismiss="modal">Editar</button>
                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deptRelationDeleteModal" data-bs-dismiss="modal">Deletar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deptRelationEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Editar</label>
                        </div>
                        <div className="modal-body"><DeptRelationEditForm id={`${params.deptId}`} /></div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deptRelationDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Deseja deletar está relação entre departamentos ?</label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                            <button onClick={() => deleteDeptRelation()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
