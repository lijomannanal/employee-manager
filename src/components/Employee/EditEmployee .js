import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import EmployeeForm from "./EmployeeForm";
import { addEmployee, editEmployee, updateEmployee } from '../../actions';
import { EditAttributes } from '@material-ui/icons';



const EditEmployee = () => {
    const  [submitted, setSubmitted]  = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const { loadedEmployee } = useSelector(state => state.employee);

    const updatEmployeeInfo = (values) => {
       setSubmitted(true);
       dispatch(updateEmployee({...values, history}))
    }
    useEffect(() => {
        dispatch(editEmployee({ id }));
    }, [id]);

    return (
        <>
        <div className="page-title">
            <Typography variant='h6'>
               Edit Employee
            </Typography>
        </div>
         <div className="page-container">
             <Card className="card-form">
                 <CardContent>
                    <EmployeeForm submitted={submitted} initialValues={loadedEmployee} onSubmit={updatEmployeeInfo}/>
                 </CardContent>
             </Card>

         </div>
         </>
    )
}

export default EditEmployee;