import {useReducer} from 'react'

export const useMyData = () => {

    const initialState = {
        name: undefined,
        email: undefined,
        password: undefined,
        cel: undefined,
        tel: undefined,
        adress: undefined
    }
    
    const myDataReducer = (state, action) => {
        switch(action.type){
            case 'name': {
                state.name = action.payload
                return state
            }
            case 'email': {
                state.email = action.payload
                return state
            }
            case 'password': {
                state.password = action.payload
                return state
            }
            case 'cel': {
                state.cel = action.payload
                return state
            }
            case 'tel': {
                state.tel = action.payload
                return state
            }
            case 'adress': {
                state.adress = action.payload
                return state
            }
        }
    }

    const [inputState, inputDispatch] = useReducer(myDataReducer, initialState)

    return [inputState, inputDispatch]
}

