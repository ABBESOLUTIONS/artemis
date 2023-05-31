import { styled, SxProps, Typography } from '@mui/material';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const FooterItemContainer = styled('div')(() => ({
    padding:"5px 0px 5px 0px"
}));
const FooterItemLink = styled("a")(() => ({
    textDecoration: "none",
    color:"black",
    margin:"10px",
    '&:hover':{
        color:"green"
    }
}));

interface Pops {
    title: string,
    path: string,
    sx? : SxProps,
    target?: string
};

function FooterItems({title, path, sx={}, target}: Pops) {
    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <FooterItemContainer>
            <Typography target={target} component={FooterItemLink} href={path} variant="body1" style={{color: match ? "black" : "black"}} sx={{...sx}}>{title}</Typography>
        </FooterItemContainer>
    );
}

export default FooterItems;