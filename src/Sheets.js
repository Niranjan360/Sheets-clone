import { useState } from "react";
import {Link} from 'react-router-dom'

const Sheets = () => {

    let [data , setData] = useState(null);
    let [pending , setPending] = useState(true);

    setTimeout(()=>{
    fetch("http://localhost:4000/StudentDetails")
    .then((response)=>{return response.json();})
    .then((fetchedData)=>{setData(fetchedData);setPending(false)})
    } , 2000)

    return ( 
    <div className="sheet-content">

        {
            pending && <h1>Loading</h1>
        }

        {
            data && 
            <table border="2px">
                <tr className="first-row">
                    <th>sl no</th>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>View </th>
                </tr>

                {
                    data.map((std , i)=>( 
                        <tr>
                            <td>{i+1}</td>
                            <td>{std.stdName}</td>
                            <td>{std.email}</td>
                            <td>{std.phone}</td>
                            <td>{std.age}</td>
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