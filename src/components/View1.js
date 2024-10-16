// View1.js
// This View display first name and Last name 
//Check the validity of input 
//When User click Next button View2 will show

import React, { useState } from "react";

const View1 = ({ setFName, setLName, nextStep }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errors, setErrors] = useState({});
    
    const validateNameFamily = () => {
        let validationError = {};
        //Check validity of first Name. it should be letters and not empty
        if (firstName.trim() === "") {
            validationError.firstName = "First name is required";
        } else if (/[^a-zA-Z]/.test(firstName)) {
            validationError.firstName = "First name should only use letters";
        }
         //Check validity of last Name. it should be letters and not empty
        if (lastName.trim() === "") {
            validationError.lastName = "Last name is required";
        } else if (/[^a-zA-Z]/.test(lastName)) {
            validationError.lastName = "Last name should only use letters";
        } 
        return validationError;     
    };
    /* to check the validity of entering data .
        If there is no error , go to next step and View2 will display
    */
    const submitFunction = () => {
        const errorMessage = validateNameFamily();
        if (Object.keys(errorMessage).length > 0) {
            setErrors(errorMessage);
        } else {
            setErrors({});
            setFName(firstName);
            setLName(lastName);
            nextStep();
        }
    };

    return (
        <div>
            <h3>Enter information</h3>
            <div style={{ marginBottom: '10px' }}>
                <label>First Name: </label>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                {/* If there is any error the error paragraph shows*/}
                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Last Name: </label>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                {/* If there is any error the error paragraph shows*/}
                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
            </div>
            <button onClick={submitFunction}>Next</button>
        </div>
    );      
};

export default View1;