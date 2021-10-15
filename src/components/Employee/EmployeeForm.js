import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Prompt } from 'react-router-dom';
import { CustomTextField, CustomRadioButton } from "../common/CustomInputs";
import { Card, CardContent, Grid, Button } from "@material-ui/core";
import { checkEmailExist } from '../../service';

const asyncValidate = (values /*, dispatch */) => {
    return checkEmailExist(values.email, values.id).then(isExist => {
        if (isExist) {
            throw { email: 'User with this email address already exists' }   
        }
    });
  }

const validate = (values) => {
    const errors = {};
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'number',
      'gender',
    ];


    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'This is required';
      }
    });

    for(const field of Object.keys(values)) {
        if(field === 'firstName' || field === 'lastName') {
            if(values[field] && values[field].length < 6 || values[field].length >10) {
                errors[field] = 'This field must contain only 6 to 10 characters';
            }
        }
        if (field === 'email') {
            if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = 'Please enter a valid email address';
              }
        }
        if(field === 'number') {
            if (values.number && !/[6|8|9]\d{7}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/g.test(values.number)) {
                errors.number = 'Please enter a valid phone number';
            }
        }

    }
    return errors;
  }

const EmployeeForm = (props) => {

    const { handleSubmit, pristine, reset, submitting, initialValues, submitted } = props;
    return (
        <>
    <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={6} md={12}>
                <Field
                    name="firstName"
                    component={CustomTextField}
                    label="First Name"
                />
            </Grid>
            <Grid item xs={6} md={12}>
                <Field 
                    name="lastName" 
                    component={CustomTextField} 
                    label="Last Name" />
            </Grid>
            <Grid item xs={6} md={12}>
            <Field 
                name="email" 
                component={CustomTextField} 
                label="Email" />
            </Grid>
            <Grid item xs={6} md={12}>
                <Field name="number"
                 component={CustomTextField}
                 label="Phone Number" />
            </Grid>
            <Grid item xs={6} md={12}>
                <Field name="gender" component={CustomRadioButton}>
                </Field>
            </Grid>
            <Grid item xs={6} md={12}>
            <Button component={Link} to='/' variant="contained"  type="submit">
                Cancel
            </Button>
            &nbsp;&nbsp;
            <Button variant="contained" type="button" disabled={pristine || submitting} onClick={reset}>
                Reset
            </Button>
             &nbsp;&nbsp;
            <Button variant="contained" color="secondary" type="submit" disabled={pristine || submitting}>
                Submit
            </Button>
            </Grid>
        </Grid>
  </form>
  <Prompt
        when={Boolean(!pristine && initialValues && !submitted)}
        message={location =>
          `Form has been modified. You will lose your unsaved changes. Are you sure you want to close this form?`
        }
      />
  </>
    )
}


export default reduxForm({
    form: 'EmployeeForm', // a unique identifier for this form
    validate,
    asyncValidate,
    asyncChangeFields: ['email'],
    enableReinitialize: true
  })(EmployeeForm);