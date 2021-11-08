import React from 'react'

import image from "../images/suit2.png"
import Common from './Common';

const About = () => {
    return (
        <>
        <div className="suit">
        <Common
         name="Welcome to About page" imgsrc={image} visit='/contact' btname="Contact with us" />
         </div>
         </>
    )
}

export default About
