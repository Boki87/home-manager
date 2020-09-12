import {
    SET_USER,
    SET_LOADING,
} from './types'

export default (state, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }                
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }                
        default:
            return state
    }
}