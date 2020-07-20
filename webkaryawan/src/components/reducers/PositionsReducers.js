import {
    FETCH_COMPLETE, HANDLE_DELETE_BUTTON,
    HANDLE_EDIT_BUTTON,
    HANDLE_INPUT_CHANGES,
    RESET_FORM,
    SET_LOADING,
    SUBMIT_COMPLETE
} from "../actions/Action";

const defaultValue = {
    id:"",
    name : "",
    code : "",
    isDelete:""
}

const initialState = {
   form : {...defaultValue},
   positions : [],
   isLoading : true
}

export default function PositionsReducers(state=initialState, action) {

    const {type, payload} = action

    switch (type) {
        case SET_LOADING :
            return {...state, isLoading: true}

        case FETCH_COMPLETE :
            return {...state, isLoading: false, positions: [...payload]}

        case HANDLE_INPUT_CHANGES :
            const form = {...state.form}
            const {inputName, inputValue} = payload
            form[inputName] = inputValue
            return {...state, form: {...form}}

        case SUBMIT_COMPLETE :
            return {...state, isLoading: false, form: {...defaultValue}}

        case RESET_FORM :
            return {...state, form: {...defaultValue}}

        case HANDLE_EDIT_BUTTON :
            return {...state, form: state.positions.filter((position) => position.id === payload)}

        case HANDLE_DELETE_BUTTON :
            return {...state, positions: state.positions.filter((position) => position.id !== payload)}

        default :
            return {...state}
    }

}