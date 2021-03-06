import {
    FETCH_COMPLETE, HANDLE_DELETE_BUTTON,
    HANDLE_EDIT_BUTTON,
    HANDLE_INPUT_CHANGES,
    RESET_FORM,
    SET_LOADING,
    SUBMIT_COMPLETE
} from "../actions/Action";

const defaultValue = {
    name : "",
    birthDate : "",
    idNumber:"",
    gender:"",
    position:{
        id:"",
        name:"",
        code:"",
        isDelete:""
    },
    isDelete: ""
}

const initialState = {
    form : {...defaultValue},
    employees : [],
    isLoading : true
}

export default function EmployeeReducers(state=initialState, action) {

    const {type, payload} = action

    switch (type) {
        case SET_LOADING :
            return {...state, isLoading: true}

        case FETCH_COMPLETE :
            return {...state, isLoading: false, employees: [...payload]}

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
            return {...state, form: state.employees.find((employee) => employee.id === payload)}

        case HANDLE_DELETE_BUTTON :
            return {...state, positions: state.employees.filter((employee) => employee.id !== payload)}

        default :
            return {...state}
    }

}