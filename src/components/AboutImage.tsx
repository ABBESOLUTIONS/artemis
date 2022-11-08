import { styled, SxProps } from '@mui/material';

const AboutOverViewContainerImg= styled("img")(()=>({
    width: "285px",
    height: "320px",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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