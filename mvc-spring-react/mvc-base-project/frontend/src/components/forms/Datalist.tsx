import axios from "axios";
import { useEffect, useState } from "react";
import { DeptPage } from "types/dept";
import { BASE_URL } from "utils/requests";

export function DeptDatalist() {
    const [deptPage, setDeptPage] = useState<DeptPage>({ content: [], number: 0 })
    const [value, setValue] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}/dept/page?name=${value}`)
            .then(response => {
                setDeptPage(response.data);
            });
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className="form-group">
            <label htmlFor="deptName">Departamento: </label>
            <input
                id="deptName"
                list="deptList"
                value={value}
                onChange={handleChange}
                className="form-control"
                placeholder="busque pelo departamento"
            />
            <datalist id="deptList" >
                {deptPage.content?.filter((dept) =>
                    dept.name.toLowerCase().includes(value.toLocaleLowerCase()))
                    .map((dept) => (
                        <option id="value" key={dept.id} value={dept.name} >
                            {dept.name}
                        </option>
                    ))}
            </datalist>
        </div>
    );
}