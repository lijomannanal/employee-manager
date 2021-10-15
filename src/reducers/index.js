import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS,  ADD_EMPLOYEE, SAVE_EMPLOYEE, EDIT_EMPLOYEE, EDIT_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE,
    UPDATE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE, DELETE_EMPLOYEE_SUCCESS, LOAD_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {
    employees: [],
    loading: false,
    loadedEmployee: null,
};

const employeeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_EMPLOYEES:
        return { ...state, loading: true };
      case FETCH_EMPLOYEES_SUCCESS:
        return { ...state, employees: action.payload, loading: false };

    case ADD_EMPLOYEE:
        return { ...state, loading: true };

    case SAVE_EMPLOYEE:
            return { ...state,
                employees: [...state.employees, action.payload], loading: false };

    case EDIT_EMPLOYEE:
        return { ...state, loading: true };

    case LOAD_EMPLOYEE:
            return { ...state, loadedEmployee: action.payload };

    case UPDATE_EMPLOYEE:
        return { ...state, loading: true };

    case UPDATE_EMPLOYEE_SUCCESS: {
        const employees = [...state.employees];
        const empIndex = employees.findIndex(item => item.id == action.payload.id);
        employees[empIndex] = action.payload;
        return { ...state, employees, loading: false };
    }

    case DELETE_EMPLOYEE:
        return { ...state, loading: true };

    case DELETE_EMPLOYEE_SUCCESS:
        const employees = [...state.employees];
        console.log(action.payload.id);
        console.log(employees);
        const empIndex = employees.findIndex(item => item.id == action.payload.id);
        console.log(empIndex);
        employees.splice(empIndex, 1);
        return { ...state, employees , loading: false };

      default:
        return state;

    }
  };

  const rootReducer = combineReducers({
    employee: employeeReducer,
    form: formReducer
  });
  
  
  export default rootReducer;