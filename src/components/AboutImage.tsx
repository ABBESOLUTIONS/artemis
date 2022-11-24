import { styled, SxProps } from '@mui/material';

const AboutOverViewContainerImg= styled("img")(({theme})=>({
    width: "285px",
    height: "320px",
    borderRadius: "15px",
    margin:"8px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("lg")]: {
        // width:"98%",
        // height:"98%"
    },
    [theme.breakpoints.down("md")]: {
        width:"98%",
        height:"98%",
    },
}));
interface Props {
    image: string,
    sx?: SxProps
}
function AboutImage({image, sx=  {}}: Props) {
    return (
        <AboutOverViewContainerImg sx={{...sx}} src={image}/>
    );
}

export default AboutImage;