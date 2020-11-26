import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function TeamComponent(props) {

    const showUserForm = (id) => {
        props.changeState(false)
        props.getTeamId(id)
    }

    useEffect(() => {
        let buttons = document.querySelectorAll('.teamButton');
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active')
            })
        })
    }, [])


    return (
        <div>
            {
                props.team.map((item, i) => {
                    return (
                        <div id="myDIV" key={i}>
                            <div className="teamButton">
                                <button onClick={() => showUserForm(item.id)} style={{ width: '100%', border: "none", backgroundColor: 'transparent', outline: "none", height: '40px' }}>
                                    <div style={{ backgroundColor: '#EFA900', position: 'absolute', top: '0', right: '0', bottom: '0', borderRadius: '3px', width: '5px' }}>
                                        <span style={{ color: '#EFA900' }}>.</span>
                                    </div>
                                    {item.text}
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        team: state.allTeams,
    }
}


export default connect(mapStateToProps)(TeamComponent)
