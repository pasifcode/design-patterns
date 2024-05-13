import axios from "axios";
import { useEffect, useState } from "react";
import { DeptPage } from "types/dept";
import { BASE_URL } from "utils/requests";

export function DeptDatalist() {
    const [value, setValue] = useState("");
    const [deptPage, setDeptPage] = useState<DeptPage>({ content: [], number: 0 })
    useEffect(() => {
        axios.get(`${BASE_URL}/dept/page?name=${value}`)
            .then((response) => {
                setDeptPage(response.data);
            });
    }, [value]);

    return (
        <div className="form-group">
            <label htmlFor="dept">Departamento: </label>
            <input type="text" list="deptList" value={value}
                onChange={(e) => setValue(e.target.value)} id="dept"
                className="form-control" placeholder="busque pelo departamento para adicionar" />
            <datalist id="deptList" >
                {deptPage.content?.filter((dept) =>
                    dept.name.toUpperCase().includes(value.toLocaleUpperCase()))
                    .map((dept) => (
                        <option id="value" key={dept.id} value={dept.name}>
                            {dept.name}
                        </option>
                    ))}
            </datalist>
        </div>
    );
}