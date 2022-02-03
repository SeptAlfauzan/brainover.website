import React, { useEffect } from "react";
import Lottie from "lottie-react";
import CirclesAnim from '../../public/lotties/circles_anim.json'
import {LogoWhatsapp, LogoInstagram} from 'react-ionicons';
import CardSocialMedia from "../cardSocialMedia";

const ContactUs = () => {
    const InstagramLogo = <LogoInstagram width={'30px'} height={'30px'}/>
    const WhatsappLogo = <LogoWhatsapp width={'30px'} height={'30px'}/>

    const handleSubmit = async (e) => {
      e.preventDefault()
      const formData = {}
      Array.from(e.currentTarget.elements).forEach(data => {
        if(!data.name) return
        formData[data.name] = data.value
      })
      console.log(formData)
    }
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
                <div className="w-full md:h-3/4 h-full flex flex-wrap">
                    <div className="md:w-2/5 w-full md:h-full relative flex flex-col">
                        <div className="absolute w-full top-0">
                          <Lottie animationData={CirclesAnim} interactivity={interactivity} />
                        </div>
                        <h3 className="text-4xl md:text-left text-center font-bold relative">Get in touch</h3>
                        <h4 className="text-xl md:text-left text-center relative mt-5 text-slate-500">Contact us so we can help you.</h4>
                        <div className="flex w-full md:flex-col flex-row md:gap-3 gap-0 relative md:flex-grow md:justify-center md:my-0 my-10">
                          {/* <CardSocialMedia icon={InstagramLogo} text={'Instagram'} link={'#'}/>
                          <CardSocialMedia icon={WhatsappLogo} text={'Whatsapp'} link={'#'}/> */}
                        </div>
                    </div>
                    <div className="relative md:w-1/5 w-full my-3 flex items-center justify-center">
                      <p className="text-center font-semibold text-slate-500">
                      Or Email Us
                      </p>
                    </div>
                    <div className="md:w-2/5 w-full relative">
                      <form method="POST" onSubmit={handleSubmit}>
                        <div className="w-full h-full rounded-lg bg-white shadow-2xl py-8 px-10">
                          <div className="flex flex-col gap-2 mb-5">
                            <label className="font-semibold">Your Name</label>
                            <input required name="name" className="border border-slate-400 p-2 rounded" type={'text'} placeholder="Plese type your name"/>
                          </div>
                          <div className="flex flex-col gap-2 mb-5">
                            <label className="font-semibold">E-Mail</label>
                            <input required name="email" className="border border-slate-400 p-2 rounded" type={'email'} placeholder="Plese type your name"/>
                          </div>
                          <div className="flex flex-col gap-2 mb-5">
                            <label className="font-semibold">Message</label>
                            <textarea required name="message" className="border border-slate-400 p-2 rounded"  type={'email'} placeholder="Plese type your name"/>
                          </div>
                          <div className="flex flex-col gap-2">
                            <button className="ml-auto w-1/2 bg-teal-300 px-5 py-2 rounded transition-all duration-200 hover:bg-teal-400 hover:text-white">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs