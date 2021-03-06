import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_FORM_RESET
} from '../actions/types';

const INITIAL_STATE = {
    name: '', 
    phone: '',
    shift: 'Sunday',
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_FORM_RESET:
            return INITIAL_STATE;
        default:
            return state;
    }
}