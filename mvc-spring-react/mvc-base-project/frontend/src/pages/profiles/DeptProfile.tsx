import { useParams } from "react-router-dom";
import { DeptLgCard, DeptRelationSmCard } from "components/cards/DeptCard";
import axios from "axios";
import { PeopleSmCard } from "components/cards/PeopleCard";
import { DeptRelationAddForm } from "components/forms/DeptForm";
import { useState, useEffect } from "react";
import { DeptRelationPage } from "types/dept";
import { Props } from "types/main";
import { PeoplePage } from "types/people";
import { BASE_URL } from "utils/requests";

export function DeptProfile() {

    const params = useParams();

    return (
        <>
            <div className="container">
                <DeptLgCard id={`${params.deptId}`} />
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <DeptRelationList id={`${params.deptId}`} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <PeopleListByDept id={`${params.deptId}`} />
                    </div>
                </div>
            </div>
        </>
    );

    function DeptRelationList({ id: deptId }: Props) {

        const params = useParams();
        const [deptRelationPage, setDeptPage] = useState<DeptRelationPage>({ content: [], number: 0 });
        useEffect(() => {
            axios.get(`${BASE_URL}/dept-relation/page/${deptId}?size=${deptRelationPage.numberOfElements}`)
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
                            </div>
                            <div className="modal-body"><DeptRelationAddForm id={`${params.deptId}`} /></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    function PeopleListByDept({ id: deptId }: Props) {
        const [peoplePage, setPeoplePage] = useState<PeoplePage>({
            content: [],
            number: 0
        });
        useEffect(() => {
            axios.get(`${BASE_URL}/people/find-by-dept/${deptId}?size=10`)
                .then((response) => {
                    setPeoplePage(response.data);
                });
        }, [deptId]);

        return (
            <>
                <div className="card-sm-box ">
                    <div className="py-3  d-flex justify-content-between">
                        <h4 className="card-title">Pessoas Relacionadas</h4>
                    </div>
                    {peoplePage.empty ? <h5>Nenhum Item Adicionado</h5> :
                        <div className="row">
                            {peoplePage.content?.map(x => (
                                <div key={x.id} className="col-12 mb-2">
                                    <PeopleSmCard people={x} />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </>
        );
    }
}
