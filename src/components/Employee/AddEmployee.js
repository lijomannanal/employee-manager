import { useHistory } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import {toast } from 'react-toastify';
import EmployeeForm from "./EmployeeForm";
import { addEmployee } from '../../actions';



const AddEmployee = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const saveEmployee = (values) => {
       dispatch(addEmployee({...values, history}))
    }
    return (
        <>
        <div className="page-title">
            <Typography variant='h6'>
               Add Employee
            </Typography>
        </div>
         <div className="page-container">
             <Card className="card-form">
                 <CardContent>
                    <EmployeeForm onSubmit={saveEmployee}/>
                 </CardContent>
             </Card>

         </div>
         </>
    )
}

export default AddEmployee;