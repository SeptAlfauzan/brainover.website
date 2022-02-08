import React, { useEffect } from "react";
import Lottie from "lottie-react";
import CirclesAnim from "../../public/lotties/circles_anim.json";
import { LogoWhatsapp, LogoInstagram } from "react-ionicons";
import CardSocialMedia from "../cardSocialMedia";

const ContactUs = () => {
  const InstagramLogo = <LogoInstagram width={"30px"} height={"30px"} />;
  const WhatsappLogo = <LogoWhatsapp width={"30px"} height={"30px"} />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((data) => {
      if (!data.name) return;
      formData[data.name] = data.value;
    });

    const config = {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formData),
      method: "POST",
    };

    fetch("http://localhost:3000/api/hello", config)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
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
  return (
    <div
      id="contact-section"
      className="flex min-h-screen w-full justify-center"
    >
      <div className="w-3/4">
        <div className="flex h-full w-full flex-wrap md:h-3/4">
          <div className="relative flex  w-full flex-col md:w-2/5">
            <div className="absolute top-0 w-full">
              <Lottie
                animationData={CirclesAnim}
                interactivity={interactivity}
              />
            </div>
            <h3 className="relative text-center text-4xl font-bold md:text-left">
              Get in touch
            </h3>
            <h4 className="relative mt-5 text-center text-xl text-slate-500 md:text-left">
              Contact us so we can help you.
            </h4>
            <div className="relative my-10 flex w-full flex-row gap-0 md:my-0 md:flex-grow md:flex-col md:justify-center md:gap-3">
              <CardSocialMedia
                icon={InstagramLogo}
                text={"Instagram"}
                link={"#"}
              />
              <CardSocialMedia
                icon={WhatsappLogo}
                text={"Whatsapp"}
                link={"#"}
              />
            </div>
          </div>
          <div className="relative my-3 flex w-full items-center justify-center md:w-1/5">
            <p className="text-center font-semibold text-slate-500">
              Or Email Us
            </p>
          </div>
          <div className="relative w-full md:w-2/5">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="w-full rounded-lg bg-white py-8 px-10 shadow-2xl">
                <div className="mb-5 flex flex-col gap-2">
                  <label className="font-semibold">Your Name</label>
                  <input
                    required
                    name="name"
                    className="rounded border border-slate-400 p-2"
                    type={"text"}
                    placeholder="Plese type your name"
                  />
                </div>
                <div className="mb-5 flex flex-col gap-2">
                  <label className="font-semibold">E-Mail</label>
                  <input
                    required
                    name="email"
                    className="rounded border border-slate-400 p-2"
                    type={"email"}
                    placeholder="Plese type your name"
                  />
                </div>
                <div className="mb-5 flex flex-col gap-2">
                  <label className="font-semibold">Message</label>
                  <textarea
                    required
                    name="message"
                    className="rounded border border-slate-400 p-2"
                    type={"email"}
                    placeholder="Plese type your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <button className="ml-auto w-1/2 rounded bg-teal-300 px-5 py-2 transition-all duration-200 hover:bg-teal-400 hover:text-white">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
