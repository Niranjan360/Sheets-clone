import {useState} from 'react';
import {useHistory} from 'react-router-dom'

const Home = () => {

    let history = useHistory();

    let [stdName , setName] = useState("");
    let [gender , setGender] = useState("");

    let handelSubmit = (e)=>{
        e.preventDefault();

        let newStd = {stdName , gender};

        fetch("http://localhost:4000/StudentDetails" , 
        {
            method:"POST",
            headers : {"Content-Type" : "application/json"},
            body:JSON.stringify(newStd)
        })
        .then(()=>{
            alert("data is added");
            history.push("/sheets");

        })
    
    }



    return ( 
        <div className="home-content">

<form onSubmit={handelSubmit}>

                <label>Name : </label> 
    <input type="text" value={stdName} onChange={(e)=>{setName(e.target.value)}} />


                <fieldset>
                    <legend align="center">Select your gender</legend>

<input type="radio" name="gender" value="Male" onClick={(e)=>{setGender(e.target.value)}} /> <label>Male</label>

<input type="radio" name="gender" value="Female" onClick={(e)=>{setGender(e.target.value)}}/> <label>Female</label>


<input type="radio" name="gender" value="Others" onClick={(e)=>{setGender(e.target.value)}}/> <label>Others</label>

                    <br />
                </fieldset>

                <input type="submit" />
                
</form>

        </div>
    );
}

export default Home