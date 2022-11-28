import { Fragment } from "react";
import { styled, SxProps } from "@mui/material";
import { Helmet } from "react-helmet-async";

const PageBaseStyle = styled("div")(() => ({
    // maxWidth: "1800px",
    // width: "100%",
    // margin: "auto"
    paddingTop:"80px"
}));
interface Props {
    children: React.ReactNode,
    title: string,
    sx?: SxProps
}

function Page({children, title = "", sx = {}}: Props) {
    const finalTitle = title === "" ? " Artemis " : title + " | Artemis Assurance";

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