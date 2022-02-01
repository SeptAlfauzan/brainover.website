import React from "react";
import Lottie from "lottie-react";
import CirclesAnim from '../../public/lotties/circles_anim.json'

const ContactUs = () => {
    const interactivity = {
        mode: "scroll",
        actions: [
          {
            visibility: [0, 0.2],
            type: "stop",
            frames: [0],
          },
          {
            visibility: [0.2, 0.25],
            type: "seek",
            frames: [0, 30],
          },
          {
            visibility: [0.25, 1.0],
            type: "play",
            frames: [100],
          },
        ],
    };
    return(
        <div id="contact-section" className="w-full min-h-screen flex justify-center">
            <div className="w-3/4">
                <h3 className="text-4xl md:text-left text-center font-bold mt-10">Get in touch</h3>
                <h4 className="text-xl md:text-left text-center font-light">Contact us so we can help you.</h4>
                <div className="w-full flex flex-wrap">
                    <div className="md:w-1/2 w-full">
                        <Lottie animationData={CirclesAnim} interactivity={interactivity} />
                    </div>
                    <div className="md:w-1/2 w-full">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs