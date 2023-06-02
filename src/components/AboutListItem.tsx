import { ListItem, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';

const AboutListItemStyle = styled (Typography)(()=>({
    fontFamily:"PoppinsRegular, sans-serif !important",
    // fontSize:"0.9em"

}))

interface Props {
    text: string
}

function AboutListItem({text}: Props) {
    return (
        <ListItem>
            <ListItemIcon>
                <CheckCircleOutlineIcon/>
            </ListItemIcon>
            <ListItemText>
                <AboutListItemStyle>{text}</AboutListItemStyle>
            </ListItemText>
        </ListItem>
    );
}

export default AboutListItem;