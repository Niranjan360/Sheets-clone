import { useState } from "react";
import {Link} from 'react-router-dom'

const Sheets = () => {

    let [data , setData] = useState(null);

    fetch("http://localhost:4000/StudentDetails")
    .then((response)=>{return response.json();})
    .then((fetchedData)=>{setData(fetchedData);})

    return ( 
    <div>
        {
            data && 
            <table border="2px" className="table-content">
                <tr>
                    <th>sl no</th>
                    <th>Student Name</th>
                    <th>Gender</th>
                    <th>View </th>
                </tr>

                {
                    data.map((std)=>(
                        <tr>
                            <td>{std.id}</td>
                            <td>{std.stdName}</td>
                            <td>{std.gender}</td>
                            <td><Link to={`/details${std.id}`}><button>View</button></Link></td>
                        </tr>
                    ))
                }

            </table>
        }
    </div>
    );
}

export default Sheets;