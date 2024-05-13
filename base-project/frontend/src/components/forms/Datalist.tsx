import axios from "axios";
import { useEffect, useState } from "react";
import { DeptPage } from "types/dept";
import { BASE_URL } from "utils/requests";

export function DeptDatalist() {
    const [deptPage, setDeptPage] = useState<DeptPage>({
        content: [],
        number: 0
    })
    const [value, setValue] = useState("");
    useEffect(() => {
        axios.get(`${BASE_URL}/dept/page?name=${value}`)
            .then(response => {
                setDeptPage(response.data);
            });
    }, [value]);

    return (
        <div className="form-group">
            <label htmlFor="dept">Departamento: </label>
            <input id="dept" type="text" list="deptList" 
            value={value} onChange={(e) => setValue(e.target.value)} 
            className="form-control" placeholder="busque pelo departamento" />
            <datalist id="deptList" >
                {deptPage.content?.filter((dept) =>
                    dept.description.toLowerCase().includes(value.toLocaleUpperCase().toLocaleLowerCase()))
                    .map((dept) => (
                        <option id="value" key={dept.id} value={dept.id.toString()}>
                            {dept.name}
                        </option>
                    ))}
            </datalist>
        </div>
    );
}