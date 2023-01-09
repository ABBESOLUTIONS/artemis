import { ListItem, ListItemText, styled } from "@mui/material";
import { NavLink, useMatch, useNavigate, useResolvedPath } from "react-router-dom";

const CustomLink = styled("div")(() => ({
    width: "calc(100%)",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    cursor:"pointer",
    // borderRight: "3px solid #E0E0E0",
    fontSize: 20,
    color: "black",
    "&:hover": {
        // borderRight: "3px solid #78BAFE",
        backgroundColor:"#E7F4F2",
    },
}));
interface Props {
    title: string,
    path: string,
    closeClick:Function
}

function MyDrawerItem({title, path, closeClick}: Props) {
    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true });
    const navigate = useNavigate()
    const navigation = () => {
        navigate(path)
        closeClick()
    }

    return (
        <ListItem key={title} disablePadding sx={{borderBottom: "1px solid #E0E0E0"}}>
            <CustomLink onClick={navigation} sx={{height: "70px"}} style={{backgroundColor: match ? "#E7F4F2" : ""}}>
                <ListItemText primary={title} />
            </CustomLink>
        </ListItem>
    );
}

export default MyDrawerItem;