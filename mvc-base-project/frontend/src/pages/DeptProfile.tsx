import { useParams } from "react-router-dom";
import { DeptLgCard } from "components/cards/DeptCard";
import { DeptRelationList } from "./DeptList";
import { PeopleListByDept } from "./PeopleList";

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
}