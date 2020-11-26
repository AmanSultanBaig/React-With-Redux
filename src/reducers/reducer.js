const initialStates = {
    allTeams: [],
    allUsers: []
}
const teamReducer = (state = initialStates, action) => {
    if (action.type === 'ADD_TEAM') {
        return {
            ...state,
            allTeams: [...state.allTeams, { id: Math.random(), text: action.payload }]
        }
    }
    else if (action.type === 'ADD_USER') {
        return {
            ...state,
            allUsers: [...state.allUsers, { id: Math.random(), teamId: action.payload.teamId, userName: action.payload.username, description: action.payload.description }]
        }
    }
    else if (action.type === 'REMOVE_USER') {
        console.log("REMOVE STATE", state)
        return {
            ...state,
            allUsers: state.allUsers.filter((user) => user.id !== action.payload)
        }
    }
    return state
}

export default teamReducer