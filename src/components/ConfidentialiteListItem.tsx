import { ListItem, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import React, { ReactNode } from 'react';

const ConfidentialiteListItemStyle = styled (Typography)(()=>({
    // fontFamily:"PoppinsRegular, sans-serif !important",
    // fontSize:"0.9em"

}))

interface Props {
    text: string,
    child: ReactNode
}

function ConfidentialiteListItem({text, child}:Props) {
    return (
        <ListItem>
            <ListItemIcon>
                {child}
            </ListItemIcon>
            <ListItemText>
                <ConfidentialiteListItemStyle>{text}</ConfidentialiteListItemStyle>
            </ListItemText>
        </ListItem>
    );
}

export default ConfidentialiteListItem;