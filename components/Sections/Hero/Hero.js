import React, { Fragment } from "react";
import Header from "./Header";
import HeroContent from "./HeroContent";

const Hero = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      <Header ref={ref}/>
      <HeroContent onClickScroll={props.onClickScroll}></HeroContent>
    </Fragment>
  );
});

export default Hero;
