import React, { useState } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ConfirmPopup from '../common/ConfirmPopup';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../actions';

const ActionsRenderer = ({ data: { id}, history}) => {
    const [open, setOpen ] = useState(false);
    const dispatch = useDispatch();

    const gotToEditForm = () => {
        history.push(`/edit/${id}`)
    }

    const deleteEmployeeInfo = () => {
      dispatch(deleteEmployee({ id }))
    }

    return (
        <>
        <Tooltip title="Edit">
            <IconButton onClick={gotToEditForm}>
                <EditIcon/>

            </IconButton>

        </Tooltip>
           <Tooltip title="Delete" onClick={() => setOpen(true)}>
            <IconButton >
                <DeleteIcon/>

            </IconButton>
           </Tooltip>
           <ConfirmPopup
            title="Delete Employee?"
            open={open}
            setOpen={setOpen}
            onConfirm={deleteEmployeeInfo}
        >
            Are you sure you want to delete this Employee?
        </ConfirmPopup>
           </>
    )
}
export default ActionsRenderer;