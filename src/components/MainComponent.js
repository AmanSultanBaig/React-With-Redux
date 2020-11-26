import React, { useState } from 'react'
import { connect } from 'react-redux'

function MainComponent(props) {
    let localStorageData = JSON.parse(localStorage.getItem('persist:root'))
    // getting teams array
    let teamsArray = JSON.parse(localStorageData.allTeams)
    let getTeamByid = teamsArray.filter(item => {
        return item.id === props.recviedId
    })

    let users = JSON.parse(localStorageData.allUsers)
    let getUserId = users.filter(item => {
        return item.teamId === props.recviedId
    })

    const [userName, setuserName] = useState('')
    const [description, setdescription] = useState('')

    const deleteItem = (id) => {
        props.removeUser(id)
        alert("User Deleted")
        window.location.reload()
    }

    const AddUser = () => {
        props.addUser({ teamId: getTeamByid[0].id, username: userName, description: description })
        setuserName('')
        setdescription('')
        alert("User Added")
        window.location.reload()
    }

    return (

        <div>
            {/* {getUsers()} */}

            <h3>{getTeamByid.length === 0 ? '' : getTeamByid[0].text}</h3>
            <hr />
            <div className="row" style={{ overflowY: 'auto', height: '450px' }}>
                <div className="col-md-4 mt-2">
                    <div style={{ backgroundColor: '#CCD8DC', padding: '1rem', width: '15rem' }}>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Name</label>
                            <input type="email" className="form-control" onChange={(e) => setuserName(e.target.value)} value={userName} id="exampleFormControlInput1" placeholder="Enter Here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Discription</label>
                            <textarea className="form-control" onChange={(e) => setdescription(e.target.value)} value={description} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-warning text-white w-100" onClick={() => AddUser()}>Create User +</button>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-1">
                </div> */}
                {
                    getUserId.map((user, i) => {
                        return (
                            <div key={i} className="col-md-4 mt-2" style={{marginRight: '.1rem'}}>
                                <div style={{ backgroundColor: '#CCD8DC', padding: '1rem', width: '15rem'}}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Name</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" value={user.userName} placeholder="Enter Here" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Discription</label>
                                        <textarea className="form-control" value={user.description} id="exampleFormControlTextarea1" rows="3">
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-danger text-white w-100" onClick={() => deleteItem(user.id)}>Delete User -</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.allUsers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch({ type: 'ADD_USER', payload: user })
        },
        removeUser: (id) => {
            dispatch({ type: 'REMOVE_USER', payload: id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)