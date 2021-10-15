import React, { useState, useEffect } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { AppBar, Toolbar, Typography, withStyles, Button } from '@material-ui/core';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { useSelector, useDispatch } from 'react-redux';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import ActionsRenderer from './ActionsRender';

import { makeStyles } from '@material-ui/core/styles';
import { fetchEmployees } from '../../actions';

const useStyles = makeStyles(() => ({
    addbtn: {
        display: "block",
        marginLeft: "auto",
        marginBottom: "1rem",
    },
    title: {
        marginRight: "15px"
    },
    btnContainer: {
      marginLeft: 'auto',
      marginRight: 0,
      width: '150px'
    }
}));



const EmployeeList = () => {

    const [ gridApi, setGridApi ] = useState(null);

    const { addbtn, btnContainer } = useStyles();
    const dispatch = useDispatch();

    const history = useHistory();

    const { employees } = useSelector(state => state.employee);

    const colDefs = [
        {
            headerName: 'First Name', field: 'firstName', width: 200
        },
        {
            headerName: 'Last Name', field: 'lastName', width: 200
        },
        {
            headerName: 'Email', field: 'email', width: 400
        },
        {
            headerName: 'Phone number', field: 'number', width: 200
        },
        {
            headerName: 'Gender', field: 'gender', width: 200
        },
        {
            headerName: 'Actions', field: '', cellRenderer: "ActionsRenderer", cellRendererParams: { history }
        }
    ];

    const frameworkComponents = {
        ActionsRenderer
    };

    const onGridReady = (params) => {
        setGridApi(params.api);
        params.api.sizeColumnsToFit();
    }

    useEffect(() => {
        if(gridApi) {
            const setAutoHeight = () => {
                gridApi.setDomLayout('autoHeight');
                document.querySelector('#appGrid').style.height = '';
            }
            setAutoHeight();
        }
    }, []);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, []);

    return (
        <>
        <div className="page-title">
            <Typography variant='h6'>
               Employee List
            </Typography>
        </div>

        <div className="page-container">
            <div id="appGrid" className="ag-theme-material" style={{height: '70vh'}}>
            <div className={btnContainer}>
                <Button component={Link} to='/add' className={addbtn} variant="contained" color="secondary"> 
                    Add Employee
                </Button>
            </div>
            <AgGridReact
                defaultColDef={{sortable: true, filter: true }}
                pagination={true}
                paginationPageSize={10}
                frameworkComponents={frameworkComponents}
                onGridReady={onGridReady}
                rowData={employees}
                columnDefs={colDefs}
                >
           </AgGridReact>
            </div>
        </div>
        </>
    )
}

export default EmployeeList;