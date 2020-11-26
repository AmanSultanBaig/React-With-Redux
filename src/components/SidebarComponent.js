import React from 'react'
import TeamComponent from './TeamComponent';

function SidebarComponent(props) {
    return (
        <div style={{ backgroundColor: '#ECEBF0', height: '87vh' }}>
            <div style={{ padding: '2rem', overflowY: 'auto', height: '500px' }}>
                <b>Teams</b>
                <TeamComponent changeState={props.parentState} getTeamId={props.getId} getIdForCss={props.recviedId}/>
            </div>
            <hr style={{ backgroundColor: "black" }} />
        </div>
    )
}

export default SidebarComponent