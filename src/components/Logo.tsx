import { Box, styled, SxProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CLIENT_PAGES } from "../routes/paths";

interface Props {
  disableLink?: boolean,
  logoImg?: string,
//   title?:string,
  sx? : SxProps,
};

function Logo({ disableLink = false, sx = {}, logoImg }: Props) {

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src={logoImg} alt="Logo" width="30px" height="100%" />
    </Box>
  );

  if (disableLink) {
    return <>{logo}</>;
  }

  return <Link to={CLIENT_PAGES.home}>{logo}</Link>;
}

export default Logo;
