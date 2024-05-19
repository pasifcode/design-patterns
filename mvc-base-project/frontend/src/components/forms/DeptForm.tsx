import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Props } from "types/main";
import { BASE_URL } from "utils/requests";
import { Dept } from "types/dept";
import { DeptDatalist } from "./Datalist";

export function DeptAddForm() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const description = (event.target as any).description.value;


        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/dept/save",
            data: {
                name: name,
                description: description,

            }
        };
        axios(config).then(response => {
            navigate("/");
        })
    }

    return (
        <form className=" form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nome do Departamento: </label>
                <input type="text" className="form-control" id="name" />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descrição: </label>
                <textarea className="form-control"  id="description" defaultValue={"Descrição do departamento"}>
                </textarea>
            </div>

            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </div>
        </form>
    );
}

export function DeptEditForm({ id: deptId }: Props) {

    const [dept, setDept] = useState<Dept>();
    useEffect(() => {
        axios.get(`${BASE_URL}/dept/${deptId}`)
            .then((response) => {
                setDept(response.data);
            })
    }, [deptId])

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const description = (event.target as any).description.value;


        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "PUT",
            url: "/dept/update",
            data: {
                id: deptId,
                name: name,
                description: description,

            }
        };
        axios(config).then(response => {
            navigate(0);
        })
    }

    return (
        <form className=" form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nome do Departamento: </label>
                <input type="text" className="form-control" id="name" defaultValue={dept?.name} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descrição: </label>
                <textarea className="form-control" defaultValue={dept?.description} id="description">
                </textarea>
            </div>

            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Editar</button>
            </div>
        </form>
    );
}

export function DeptRelationAddForm({ id: relatingDeptId }: Props) {

    const [dept, setDept] = useState<Dept>();
    useEffect(() => {
        axios.get(`${BASE_URL}/dept/${relatingDeptId}`)
            .then((response) => {
                setDept(response.data);
            });
    }, [relatingDeptId]);

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const deptName = (event.target as any).deptName.value;
        const description = (event.target as any).description.value;


        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/dept-relation/save",
            data: {
                relatingDeptId: relatingDeptId,
                relatedDeptId: deptName,
                description: description
            }
        };
        axios(config).then(response => {
            navigate(0);
        })
    }

    return (
        <form className=" form-container" onSubmit={handleSubmit}>
            <DeptDatalist />
            <div className="form-group">
                <label htmlFor="description">Descrição: </label>
                <input className="form-control" id="description" />
            </div>

            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </div>
        </form>
    );
}