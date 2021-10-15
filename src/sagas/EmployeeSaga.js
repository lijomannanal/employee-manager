import { all, call, fork, put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import {toast } from 'react-toastify';
import { ADD_EMPLOYEE, SAVE_EMPLOYEE, EDIT_EMPLOYEE, UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYE_SUCCESS, FETCH_EMPLOYEES, UPDATE_EMPLOYEE_SUCCESS } from '../actions/types';

import { fetchEmployeesSuccess, addEmployeeSuccess, editEmployeeSuccess, updateEmployeeSuccess,
 deleteEmployeeSuccess} from '../actions';

import { apiUrl } from "../constants";
import { getState } from '../service';


export function* fetchEmployees() {
    yield takeLatest(FETCH_EMPLOYEES, fetchEmployeesProcess)
} 

function* addEmployee() {
    yield takeLatest(ADD_EMPLOYEE, addEmployeeProcess)
} 
    
function* editEmployee() {
    yield takeLatest( EDIT_EMPLOYEE, editEmployeeProcess)
}

function* updateEmployee() {
    yield takeLatest( UPDATE_EMPLOYEE, updateEmployeeProcess)
}

function* deleteEmployee() {
    yield takeLatest( DELETE_EMPLOYEE, deleteEmployeeProcess)
}

function* fetchEmployeesProcess() {
    const localState = getState();
    if(!localState) {
        const response = yield call(fetchEmployeesProcessRequest);
        if (response.status === 200 && response.data) {
            localStorage.setItem('employees', JSON.stringify(response.data));
            yield put(fetchEmployeesSuccess(response.data));
        }
    } else {
        yield put(fetchEmployeesSuccess(localState)); 
    }

}
const fetchEmployeesProcessRequest = async() => { 

    return await axios.get(apiUrl)
    .then(response => {
        return response
    })
    .then(data => data)
    .catch(error => {
        throw (error);
    });
}


function* addEmployeeProcess({ payload: { history, ...employeeInfo} }) {
    const currentEmployees = getState() || [];
    const lastSavedId = currentEmployees.length ? 
    Math.max.apply(Math, currentEmployees.map((employee) => employee.id)) : 0;
    employeeInfo.id = lastSavedId + 1;
    currentEmployees.push(employeeInfo);
    localStorage.setItem('employees', JSON.stringify(currentEmployees));
    yield put(addEmployeeSuccess(employeeInfo));
    toast.success('Employee added successfully');
    history.push('/');
}

function* editEmployeeProcess({ payload: { id } }) {
    const currentEmployees = getState() || [];
    const employee = currentEmployees.find(item => item.id == id);
    localStorage.setItem('loadedEmployee', JSON.stringify(employee));
    yield put(editEmployeeSuccess(employee));
}

function* updateEmployeeProcess({ payload: { history, ...employeeInfo} } ) {
    const currentEmployees = getState() || [];
    const empIndex = currentEmployees.findIndex(item => item.id == employeeInfo.id);
    currentEmployees[empIndex] = employeeInfo;
    localStorage.setItem('employees', JSON.stringify(currentEmployees));
    yield put(updateEmployeeSuccess(employeeInfo));
    toast.success('Employee updated successfully');
    history.push('/');
}

function* deleteEmployeeProcess({payload: { id }}) {
    const currentEmployees = getState() || [];
    const empIndex = currentEmployees.findIndex(item => item.id == id);
    currentEmployees.splice(empIndex, 1);
    localStorage.setItem('employees', JSON.stringify(currentEmployees));
    yield put(deleteEmployeeSuccess({ id }));
    toast.success('Employee deleted successfully');
}



export default function* rootSaga() {
    yield all([
      fork(fetchEmployees),
      fork(addEmployee),
      fork(editEmployee),
      fork(updateEmployee),
      fork(deleteEmployee),
    ])
}