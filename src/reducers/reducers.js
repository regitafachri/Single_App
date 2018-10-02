import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { HANDLE_SUBMIT_DATA } from '../actions/action'


const dataNotes = (state={
    isFetching: false,
    items: {},
    message: ''
}, action) => {
    switch (action.type){
        case `${HANDLE_SUBMIT_DATA}_PENDING`:
            return {
                ...state,
                isFetching: true,
                message: 'processing'
            }

        case `${HANDLE_SUBMIT_DATA}_FULFILLED`:
            return {
                ...state,
                isFetching: false,
                items: action.payload,
                message: 'success'
            }

        case `${HANDLE_SUBMIT_DATA}_REJECTED`:
            return {
                ...state,
                isFetching: false,
                message: 'failed'
            }


        default:
            return state
    }
}




const globalReducers = combineReducers({
    dataNotes
})

export default globalReducers