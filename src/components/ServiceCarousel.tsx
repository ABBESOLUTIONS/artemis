import { styled } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import ServiceOverviewCard from "./ServiceOverviewCard";

const ServiceCarouselContainer=styled("div")(()=>({
    height:"400px",
    display:"flex",
    // flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
}))

// export default class PauseOnHover extends Component {
//     render() {
//       var settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true
//       };
//       return (
//         <ServiceCarouselContainer>
//           <h2>Pause On Hover</h2>
//           <Slider {...settings}>
//             <div>
//               <ServiceOverviewCard/>
//             </div>
//             <div>
//               <ServiceOverviewCard/>
//             </div>
//             <div>
//               <ServiceOverviewCard/>
//             </div>
//             <div>
//               <ServiceOverviewCard/>
//             </div>
//             <div>
//               <ServiceOverviewCard/>
//             </div>
//             <div>
//               <ServiceOverviewCard/>
//             </div>
//             <div>
//               <ServiceOverviewCard/>
//             </div>
//             <div>
//               <ServiceOverviewCard/>
//             </div>
//           </Slider>
//         </ServiceCarouselContainer>
//       );
//     }
//   }

interface Props{
    settings? : {
        dots:boolean,
        infinite:boolean,
        slidesToShow:number,
        slidesToScroll:number,
        autoplay:boolean,
        autoplaySpeed:number,
        pauseOnHover:boolean,
    }
}
function ServiceCarousel({settings = {dots: true, infinite: true, slidesToShow: 3, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, pauseOnHover: true}}: Props) {
    return (
        <div>
    {/* //    <ServiceCarouselContainer> */}
            <Slider {...settings}>
                <div>
                    <ServiceOverviewCard/>
                </div>
                <div>
                    <ServiceOverviewCard/>
                </div>
                <div>
                    <ServiceOverviewCard/>
                </div>
                <div>
                    <ServiceOverviewCard/>
                </div>
                <div>
                    <ServiceOverviewCard/>
                </div>
                <div>
                    <ServiceOverviewCard/>
                </div>
            </Slider>
    {/* //    </ServiceCarouselContainer> */}
    </div>
    );
}

export default ServiceCarousel;