// View2.js
// This View display Date of birth , Health card Number and Gender
//Check the validity of input 
//When User click Next button View3 will show
import React, { useState } from "react";

const View2 = ({ setBirthDate, setHealthCardNumber, setGender, nextStep }) => {
    const [dobVal, setDobVal] = useState('');
    const [hcnVal, setHcnVal] = useState('');
    const [genderVal, setGenderVal] = useState('Male');
    const[dobError,setDobError]=useState('');
    const[hcnError,setHcnError]=useState(''); 
    const[genderError,setGenderError]=useState('');        

     // Check validity of input information in View 
    const validateView2=()=>
    {
        let validate=true;
        // Check validity of date of birth

        const today = new Date();
        const birthDate = new Date(dobVal);
        console.log(dobVal,birthDate);
        console.log(today);

        if (!dobVal)
        {
            setDobError("Birth date is required");
            validate=false;
        }
        else if (birthDate>today)
        {
            setDobError("Birth date should less than today.");
            validate=false;
        }
        else
        {
            setDobError("");
        }
        // Check validity of date of birth
        if (!hcnVal)
        {
            setHcnError("Health card number is required.");
            validate=false;
        }
        else if (!/^\d{10}$/.test(hcnVal)) 
        {
            setHcnError("Health card number should 10 digits number.");
            validate=false;
        }
        else
        {
            setHcnError("");
        }
        // Check validity of Gender
        if (!genderVal) {
            setGenderError("Gender is required.");
            validate = false;
        } else {
            setGenderError(""); // Clear error if valid
        }
        return validate;
    };

    const submitFunction = () => {
        if (validateView2())
        {
        setBirthDate(dobVal);
        setHealthCardNumber(hcnVal);
        setGender(genderVal); 
        nextStep();
        }
    };

    return (
        <div>
            <h3>Enter information</h3>
            <div style={{ marginBottom: '10px' }}>
                <label>Date of Birth: </label>
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dobVal}
                    onChange={(e) => setDobVal(e.target.value)}
                />
                {dobError && <p style={{ color: 'red' }}>{dobError}</p>}
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Health Card Number: </label>
                <input
                    type="text"
                    placeholder="Health Card Number"
                    value={hcnVal}
                    onChange={(e) => setHcnVal(e.target.value)}
                />
                {hcnError && <p style={{ color: 'red' }}>{hcnError}</p>}
            </div>    
            <div style={{ marginBottom: '10px' }}>
                <label>Gender: </label>
                
                    <label>
                        <input
                            type="radio"
                            value="Male"
                            checked={genderVal === "Male"}
                            onChange={(e) => setGenderVal(e.target.value)}
                        />
                        Male
                    </label>
           
                    <label>
                        <input
                            type="radio"
                            value="Female"
                            checked={genderVal === "Female"}
                            onChange={(e) => setGenderVal(e.target.value)}
                        />
                        Female
                    </label>
               
                    <label>
                        <input
                            type="radio"
                            value="Other"
                            checked={genderVal === "Other"}
                            onChange={(e) => setGenderVal(e.target.value)}
                        />
                        Other
                    </label>
                     {genderError && <p style={{ color: 'red' }}>{genderError}</p>}
                </div>
            
            <button onClick={submitFunction}>Next</button>
        </div>
    );
};

export default View2;