import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { People } from "types/people";
import { Props } from "types/main";
import { BASE_URL } from "utils/requests";
import { DeptDatalist } from "./Datalist";

export function PeopleAddForm() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const image = (event.target as any).image.value;
        const age = (event.target as any).age.value;
        const dept = (event.target as any).dept.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/people/save",
            data: {
                name: name,
                image: image,
                age: age,
                deptId: dept
            }
        };
        axios(config).then(response => {
            navigate("/");
        })
    }

    return (
        <form className=" form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nome Completo: </label>
                <input type="text" className="form-control" id="name" />
            </div>

            <div className="form-group">
                <label htmlFor="image">Imagem: </label>
                <input type="text" className="form-control" id="image" />
            </div>

            <div className="form-group">
                <label htmlFor="age">Idade: </label>
                <input className="form-control" id="age" />
            </div>
                <DeptDatalist />
            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </div>
        </form>
    );
}

export function PeopleEditForm({ id: peopleId }: Props) {

    const [people, setPeople] = useState<People>();
    useEffect(() => {
        axios.get(`${BASE_URL}/people/${peopleId}`)
            .then((response) => {
                setPeople(response.data);
            })
    }, [peopleId])

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const image = (event.target as any).image.value;
        const age = (event.target as any).age.value;
        const dept = (event.target as any).dept.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "PUT",
            url: "/people/update",
            data: {
                id: peopleId,
                name: name,
                image: image,
                age: age,
                deptId: dept
            }
        };
        axios(config).then(response => {
            navigate(0);
        })
    }

    return (
        <form className=" form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nome Completo: </label>
                <input type="text" className="form-control" id="name" defaultValue={people?.name}/>
            </div>

            <div className="form-group">
                <label htmlFor="image">Imagem: </label>
                <input type="text" className="form-control" id="image" defaultValue={people?.image}/>
            </div>

            <div className="form-group">
                <label htmlFor="age">Idade: </label>
                <input className="form-control" id="age" defaultValue={people?.age}/>
            </div>
                <DeptDatalist />
            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Editar</button>
            </div>
        </form>
    );
}

