import { styled, SxProps, Typography } from '@mui/material';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const FooterItemContainer = styled('div')(() => ({
    
}));
const FooterItemLink = styled(Link)(() => ({
    textDecoration: "none",
    color:"black",
    margin:"10px",
}));

interface Pops {
    title: string,
    path: string,
    sx? : SxProps,
};

function FooterItems({title, path, sx={}}: Pops) {
    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <FooterItemContainer>
            <Typography component={FooterItemLink} to={path} variant="body1" style={{color: match ? "black" : "black"}} sx={{...sx}}>{title}</Typography>
        </FooterItemContainer>
    );
}

export default FooterItems;