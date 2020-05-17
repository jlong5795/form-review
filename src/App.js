import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Card from './components/Card'

function App() {
  const [ teamMembers, setTeamMembers ] = useState([
    {
      name: "Jason",
      email: "jason@long.com",
      role: "Team Lead",
    },
  ]);

  console.log('Team Members', teamMembers)

  return (
    <div className='App'>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
      {teamMembers.map((member) => {
        return <Card member={member} />
      })}
    </div>
  );
}

export default App;
