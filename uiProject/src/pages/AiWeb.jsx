import React from "react";
import AiNav from "../components/AiNav";
import { RiArrowRightLine } from "react-icons/ri";

const AiWeb = () => {
  return (
    <>
      <section className="relative w-full min-h-screen ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full object-cover top-0 left-0 w-full absolute"
          src="https://community.s3.openwebui.com/landing.mp4"
          alt=""
        />
        <div className=" absolute inset-0 bg-black/50"></div>
        <div className=" absolute pt-48 pl-16">
          <p className=" text-gray-300 ">Open WebUI</p>
          <h1 className="text-7xl text-white pt-4">The freedom AI stack.</h1>
          <h3 className=" text-gray-300 text-xl pt-6">
            Run AI on your own terms. Connect any model, extend with code,
            <br /> protect what matters—without compromise.
          </h3>
        </div>

        <div className=" absolute mt-96 ml-16 cursor-pointer">
          <div className="flex justify-between items-center mt-14">
            <button className="bg-white  font-medium pl-9 pr-9 p-2 flex justify-between items-center cursor-pointer">
              Get Open WebUI
              <RiArrowRightLine className="ml-4" />
            </button>
            <h3 className="text-white ml-8 text-sm">Join the community</h3>
            <p className="ml-2 text-gray-400 text-sm">339k+ member</p>
          </div>
          <p className="mt-5 text-gray-400 text-sm">Looking for Enterprise? Talk to our team →</p>
          
        </div>

        <div>
          <AiNav />
        </div>
      </section>
      <section className="min-h-screen bg-white">
     <h1>Scroll content</h1>
  </section>
    </>
  );
};

export default AiWeb;
