import { ADD_EMPLOYEE, SAVE_EMPLOYEE, EDIT_EMPLOYEE, LOAD_EMPLOYEE, UPDATE_EMPLOYEE,
FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, UPDATE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE, DELETE_EMPLOYEE_SUCCESS } from '../actions/types';

export const fetchEmployees = () => {
    return {
    type: FETCH_EMPLOYEES
}
};

export const fetchEmployeesSuccess = (payload) => ({
    type: FETCH_EMPLOYEES_SUCCESS,
    payload
});

export const addEmployee = (payload) => ({
    type: ADD_EMPLOYEE,
    payload
});

export const addEmployeeSuccess = (payload) => ({
    type: SAVE_EMPLOYEE,
    payload
});

export const editEmployee = (payload) => ({
    type: EDIT_EMPLOYEE,
    payload
});

export const editEmployeeSuccess = (payload) => ({
    type: LOAD_EMPLOYEE,
    payload
});

export const updateEmployee = (payload) => ({
    type: UPDATE_EMPLOYEE,
    payload
});

export const updateEmployeeSuccess = (payload) => ({
    type: UPDATE_EMPLOYEE_SUCCESS,
    payload
});

export const deleteEmployee = (payload) => ({
    type: DELETE_EMPLOYEE,
    payload
});

export const deleteEmployeeSuccess = (payload) => ({
    type: DELETE_EMPLOYEE_SUCCESS,
    payload
});