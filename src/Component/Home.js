import React from "react";

import image from "../images/brand.jpeg"
import Common from './Common';

const Home = () => {
  return (
    <>
   <Common name="Make your own style with " imgsrc={image} visit='/services' btname="Buy our clothes " />
    </>
  );
};

export default Home;
