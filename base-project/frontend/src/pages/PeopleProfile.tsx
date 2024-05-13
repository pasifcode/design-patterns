import { useParams } from "react-router-dom";
import Footer from "components/shared/Footer";
import { PeopleLgCard } from "components/cards/PeopleCard";
import { PeopleListByDept } from "./PeopleList";

export function PeopleProfile() {

    const params = useParams();

    return (
        <>
            <div className="container">
                <PeopleLgCard id={`${params.peopleId}`} />
                
            </div>
        </>
    );
}