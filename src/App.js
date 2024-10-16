import "./App.css"
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Ensure BrowserRouter is used
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [healthCardNumber, setHealthCardNumber] = useState("");
  const [gender, setGender] = useState("");    
  const navigate = useNavigate();

  const nextStep = (path) => {
    navigate(path); // Correctly call navigate with the path
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={<View1 setFName={setFirstName} setLName={setLastName} nextStep={() => nextStep('/view2')} />} 
      />
      <Route 
        path="/view2" 
        element={<View2 setBirthDate={setBirthDate} setHealthCardNumber={setHealthCardNumber} setGender={setGender} nextStep={() => nextStep('/view3')} />} 
      />
      <Route 
        path="/view3" 
        element={<View3 firstName={firstName} lastName={lastName} dateOfBirth={birthDate} healthCardNumber={healthCardNumber} gender={gender} />} 
      />
    </Routes>
  );
}

export default App;