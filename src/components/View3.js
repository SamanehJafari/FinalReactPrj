// View3.js
// This View display all the information that user entered including 
// firstName, lastName, dateOfBirth, healthCardNumber, gender

import React from 'react';

const View3 = ({ firstName, lastName, dateOfBirth, healthCardNumber, gender }) => {
  return (
    <div>
      <h2>Information</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Date of Birth: {dateOfBirth}</p>
      <p>Health Card Number: {healthCardNumber}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default View3;