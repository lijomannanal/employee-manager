import { FormControl, TextField, RadioGroup, Radio, FormControlLabel } from "@material-ui/core"

export const CustomTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => {
    return <TextField
      fullWidth
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  };

export const CustomRadioButton = ({ input, 
  meta: { touched, invalid, error }
  , ...rest }) => (
    <FormControl>
      <RadioGroup {...input} {...rest}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
      {touched && error && <span className="MuiFormHelperText-root Mui-error">{error}</span>}
    </FormControl>
  )