import { styled } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import React, { ReactNode } from 'react';

const DatePickerComponentStyle=styled("div")(()=>({

}))



interface Props {
    child: ReactNode
}

function DatePickerComponent({child}: Props) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} >
                {child}
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default DatePickerComponent;