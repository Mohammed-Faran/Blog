import React from "react";
import Navbar from "../component/Navbar";
import logoPic from "../images/Logo/logo.png";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "../images/Images";
import { handleOpenSocialMedia } from "../utils";
// import { handleOpenSocialMedia } from "../utils/common";

const About = () => {
  return (
    <div className="bg-neutral-300">
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="text-xl mb-1 font-semibold md:text-4xl pt-3 md:pt-10">
          ABOUT ME
        </div>
      </div>
      <div className="flex flex-col gap-14 p-20 mt-10 pt-2 md:flex-row">
        <div className="flex-none py-7 md:py-0">
          <div className="">
            <img src={logoPic} alt="Logo" className="w-60 rounded-md mx-auto md:w-96" />
          </div>
        </div>
        <div className="flex-1 py-0 md:py-7">
          <div className=" flex flex-col justify-start md:justify-between h-full">
            <div className="text-center md:text-left">
              <span>Hi There,</span>
              <p className="">
                I am Mohammed Faran, working as full time Associate Software
                Engineer at Mphasis (India).I have gained mostly knowledge about
                frontend technologies in my Mphasis career but i also explored
                some of other technologies by myself. I learnt about Firebase to
                provide backend for any website, i learnt to work with NEXTJS,
                Figma for design UI/UX of website, Framer Motion to add
                animation in website. I am interested in full stack development
                using MERN stack.
              </p>
            </div>
            <div className="mt-5">
            <div className="flex justify-center md:justify-start gap-5">
                <span className=""><LinkedinIcon className="w-8 h-8 hover:cursor-pointer" onClick={()=>{
                  handleOpenSocialMedia("https://www.linkedin.com/in/mohammed-faran/")
                }} /></span>
                <span className=""><GithubIcon className="w-8 h-8 hover:cursor-pointer" onClick={()=>{
                  handleOpenSocialMedia("https://github.com/Mohammed-Faran")
                }} /></span>
                <span className=""><InstagramIcon className="w-8 h-8 hover:cursor-pointer" onClick={()=>{
                  handleOpenSocialMedia("https://www.instagram.com/mohammed_faran_2000/")
                }} /></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
