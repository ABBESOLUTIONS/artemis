import { styled, SxProps } from '@mui/material';

const ImageComponentContainer= styled("img")(()=>({
    
}));
interface Props {
    image: string,
    sx?: SxProps
}
function ImageComponent({image, sx=  {}}: Props) {
    return (
        <ImageComponentContainer sx={{...sx}} src={image}/>
    );
}

export default ImageComponent;