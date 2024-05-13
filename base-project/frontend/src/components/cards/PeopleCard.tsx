import axios from "axios";
import { PeopleEditForm } from "components/forms/PeopleForm";
import Footer from "components/shared/Footer";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Props } from "types/main";
import { PeopleProps, People } from "types/people";
import { BASE_URL } from "utils/requests";

export function PeopleMdCard({ people }: PeopleProps) {

    return (
        <>
            <Link to={`/people/${people.id}`} className="text-decoration-none">
                <div className="card">
                    <img src={people.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{people.name}</h5>
                        <p className="card-text">{people.age}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export function PeopleLgCard({ id: peopleId }: Props) {

    const navigate = useNavigate();
    const params = useParams();
    const [people, setPeople] = useState<People>();
    useEffect(() => {
        axios.get(`${BASE_URL}/people/${peopleId}`)
            .then((response) => {
                setPeople(response.data);
            });
    }, [peopleId]);

    const deletePeople = () => {
        axios.delete(`${BASE_URL}/people/delete/${peopleId}`)
            .then((response) => {
                navigate("/");
            })
    }

    return (
        <>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={people?.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{people?.name}</h5>
                            <p className="card-text">{people?.age}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="d-flex justify-content-start">
                <button className="btn btn-primary" data-bs-target="#peopleEditModal" data-bs-toggle="modal">
                    Editar
                </button>
                <button className="btn btn-danger" data-bs-target="#peopleDeleteModal" data-bs-toggle="modal">
                    Deletar
                </button>
            </nav>
            <div className="modal fade" id="peopleEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Editar</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><PeopleEditForm id={`${params.peopleId}`} /></div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="peopleDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Deseja deletar este pessoa ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => deletePeople()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function PeopleSmCard({ people }: PeopleProps) {
    const params = useParams();

    return (
        <>

            <Link to={`/people/${people.id}`}>
                <div className="card-sm-container row">
                    <img className="col-2" src={people.image} alt="people-image" />
                    <div className="card-body col-10">
                        <h5>{people.name}</h5>
                        {people.age}
                    </div>
                </div>
            </Link>
        </>
    );
}



