import { useParams } from "react-router-dom";
import { PeopleLgCard } from "components/cards/PeopleCard";

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