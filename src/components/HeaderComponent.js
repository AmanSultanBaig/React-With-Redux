import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { addTeam} from '../reducers/actions'

function HeaderComponent(props) {

    const [teamState, setteamState] = useState('')
    const [selectState, setselectState] = useState('Team')

    const changeState = (e) => {
        setteamState(e.target.value)
    }

    const changeSeleteState = (e) => {
        setselectState(e.target.value)
        console.log("select", e.target.value)
    }

    const addTeamToList = () => {
        props.addTeam(teamState)
        setteamState('')
    }

    return (
        // <!-- As a heading -->
        <nav className="navbar navbar-light" style={{ backgroundColor: '#CCD8DC', height: '100px' }}>
            <div style={{ backgroundColor: '#fff', position: 'absolute', right: '1rem', padding: '5px', top: '7px', bottom: '5px' }}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Select Type</label>
                        <select onChange={changeSeleteState} style={{ backgroundColor: 'rgb(204, 216, 220)' }} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option defaultValue>Choose Any</option>
                            <option value={selectState}>Team</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Team Name</label>
                        <input onChange={changeState} value={teamState} style={{ backgroundColor: 'rgb(204, 216, 220)' }} type="text" className="form-control" id="inlineFormInputName" placeholder="Enter Here" />
                    </div>
                    <div className="col-auto">
                        <button className='btn btn-warning mt-4' disabled={teamState && selectState ? false : true} onClick={() => addTeamToList()}>Create</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTeam: (name) => {
            dispatch({ type: 'ADD_TEAM', payload: name })
        }
    }
}


export default connect(null, mapDispatchToProps)(HeaderComponent)