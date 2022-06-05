import {useState} from 'react';
import {useHistory} from 'react-router-dom'
import fill from './fill.jpg'

const Home = () => {

    let history = useHistory();

    let [stdName , setName] = useState("");
    let [email , setEmail] = useState("");
    let [phone , setPhone] = useState("");
    let [age , setAge] = useState("");
    let [gender , setGender] = useState("");

    let handelSubmit = (e)=>{
        e.preventDefault();

        let newStd = {stdName,email,phone,age , gender};

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
            <form onSubmit={handelSubmit} className="form-content">
                    <label>Name : </label> <input type="text" value={stdName} onChange={(e)=>{setName(e.target.value)}} />

                    <label>Email : </label> <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />

                    <label>Phone : </label> <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />

                    <label>Age : </label> <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}} />

                    <label>Gender : </label>

                    <fieldset>
                        <legend align="center">Select your gender</legend>

                        <div><input type="radio" name="gender" value="Male"  id='male' onClick={(e)=>{setGender(e.target.value)}} /> <label htmlFor='male'>Male</label></div>

                        <div><input type="radio" name="gender" value="Female" id='female' onClick={(e)=>{setGender(e.target.value)}}/> <label htmlFor='female'>Female</label></div>


                        <div><input type="radio" name="gender" value="Others" id='others' onClick={(e)=>{setGender(e.target.value)}}/> <label htmlFor='others'>Others</label></div>

                        <br />
                    </fieldset>
                    
                    <input type="submit" />    
            </form>

            <img src={fill}/>
        </div>
    );
}

export default Home