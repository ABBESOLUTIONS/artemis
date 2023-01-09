import { TextField, TextFieldProps, styled, } from '@mui/material';
// import TextField,  from '@mui/material/TextField';

import React from 'react';
import { PROJECT_COLORS } from '../common/colors';

const TextFieldPersonnaliseStyle= styled(TextField)({
    // '& input:valid + fieldset': {
    //     borderColor: 'green',
    //     borderWidth: 1,
    //   },
    //   '& input:invalid + fieldset': {
    //     borderColor: 'red',
    //     borderWidth: 1,
    //   },
    //   '& input:valid:focus + fieldset': {
    //     // borderLeftWidth: 6,
    //     padding: '4px !important', // override inline-style
    //   },
    '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#A8A8A8',
        },
        '&:hover fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: PROJECT_COLORS.primarySwatch,
        },
      },
})
interface Props {
    id:string,
    name?: string,
    required:boolean,
    label:string,
    value:string,
    helperText?:string,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    type?:string,
    defaultValue?:string,
}

function TextFieldPersonnalise({id, required, label, value, helperText, onChange, name,type,defaultValue}: Props) {
    return (
        <TextFieldPersonnaliseStyle 
          id={id} 
          name={name}
          required={required} 
          label={label} 
          value={value} 
          helperText={helperText} 
          onChange={onChange}
          type={type}
          defaultValue={defaultValue}
        />
    );
}

export default TextFieldPersonnalise;