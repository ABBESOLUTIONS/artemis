import { styled, SxProps, Typography } from '@mui/material';

const SizesTextStyle = styled(Typography)(({theme}) => ({
    fontSize:"18px",
    fontWeight:75,
    [theme.breakpoints.down("md")]:{
        fontSize:"14px",
        fontWeight:65,
    }
}));

interface Props {
    text:string,
    sx?:SxProps,
}


function SizesText({text, sx={}}: Props) {
    return (
       <SizesTextStyle sx={{...sx}}>
            {text}
       </SizesTextStyle> 
    );
}

export default SizesText;