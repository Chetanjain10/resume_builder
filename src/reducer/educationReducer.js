import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState.json'

export default function educationReducer(state=initialState,action){
    switch(action.type){
        case actionTypes.ADD_EDUCATION:
            return {...action.educationSection}
        case actionTypes.UPDATE_CONTACT:
            return {...action.educationSection}
        default:
            return state
    }
}