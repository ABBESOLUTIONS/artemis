import { Box, Drawer, List, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import { UserMenuItems } from "../../common/MenuConfig";
import useResponsive from "../../hooks/useResponsive";
import { useAppSelector } from "../../redux/store";
// import { AdminMenuItems } from "../../common/MenuConfig";
import MyDrawerItem from "./MyDrawerItem";

const DrawerStyle = styled(Drawer)((theme)=>({
    width:"500px",
    flexShrink: 0, 
    
    [`& .MuiDrawer-paper`]: 
      { width: 200, 
        boxSizing: "border-box",
        position:"absolute",
        // marginRight:"10px",
      },
    //   [theme.breakpoints.down("lg")]: {
    //     // width:"98%",
    //     // height:"98%"
    // },  
}));

const EmailStyle = styled(Typography)(()=>({
  fontSize:"15px",
  fontWeight:"bold",
  color:"green",
  margin:"10px",
  height:"50px",
  alignItems:"center",
}))

interface Props {
  opening:boolean,
  closing: Function,
}

function MyDrawer({opening, closing}:Props) {
  const user = useAppSelector(state => state.auth.user?.email);
  const isMobile = useResponsive("down", "lg")

    return (
        <DrawerStyle variant={isMobile ? "temporary" : "permanent"} open={opening} onClose={() => closing()}>
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <EmailStyle>{user}</EmailStyle>
              {UserMenuItems.map((menu, index) => (
                <MyDrawerItem key={index} title={menu.title} path={menu.path} closeClick={closing}/>
              ))}
            </List>
          </Box>
        </DrawerStyle>
    );
}

export default MyDrawer;