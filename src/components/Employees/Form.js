import React from 'react';
import { Label } from 'react-bootstrap';
const EmployeeForm  = (props)=>{
    return(
        <div>
            <form onSubmit={props.submit}>
                <label>Name: </label>
                <input ref = {props.reff} type ="text" placeholder="enter name"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default EmployeeForm;