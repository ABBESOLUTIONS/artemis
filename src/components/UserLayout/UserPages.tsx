import { Fragment } from "react";
import { styled, SxProps } from "@mui/material";
import { Helmet } from "react-helmet-async";
import useResponsive from "../../hooks/useResponsive";

const PageBaseStyle = styled("div")(() => ({

}));
interface Props {
    children: React.ReactNode,
    title: string,
    sx?: SxProps
}
function Page({children, title = "", sx = {width:"80%", marginTop: "80px", marginLeft:"12%", padding: "5px", position:"relative"}}: Props) {
    const isMobile= useResponsive("down","lg")
    const finalTitle = title === "" ? "Artemis" : title+" | Artemis";

    return (
        <Fragment>
            <Helmet>
                <title>{finalTitle}</title>
            </Helmet>
            <PageBaseStyle sx={{ ...sx }}>
                {children}
            </PageBaseStyle>
        </Fragment>
    );
}

export default Page;