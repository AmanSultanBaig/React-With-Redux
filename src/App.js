import React, { useState, useEffect } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// components imports
import HeaderComponent from './components/HeaderComponent'
import SidebarComponent from './components/SidebarComponent'
import MainComponent from './components/MainComponent'


function App() {

  let getTeams = JSON.parse(localStorage.getItem('persist:root'))
  getTeams = JSON.parse(getTeams.allTeams)


  const [showFormState, setFormState] = useState(true)
  const [getIdState, setIdState] = useState('')

  const changeState = (bool) => {
    setFormState(bool)
  }

  const getIdOfTeam = (id) => {
    setIdState(id)
  }

  useEffect(() => {
    // Update the document title using the browser API
    changeState(showFormState)
  }, []);

  return (
    <div className="container-fluid">
      <HeaderComponent />
      <div className="row">
        <div className="col-md-3">
          <SidebarComponent parentState={changeState} getId={getIdOfTeam} recviedId={getIdState}/>
        </div>
        <div className="col-md-9 mt-3" hidden={showFormState}>
          <MainComponent getId={getIdOfTeam} recviedId={getIdState}/>
        </div>
      </div>
    </div>
  );
}

export default App;
