const userReducer = (state, action) => {
    switch(action.type){
        case 'SIGNIN': {
            const currentUser = action.payload
            state.user.current = currentUser?.uid
            return {...state}
        }
        case 'SIGNOUT': {
            const currentUser = action.payload
            state.user.current = currentUser
            return {...state}
        }
        case 'DATA': {
            const data = action.payload
            state.user.data = {...data}
            return {...state}
        }
        default:  return state
    }
}

export default userReducer