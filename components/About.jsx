import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/me.png";
import Typed from "typed.js";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who Am I</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            Hi, I'm Arbab Tahir, a self-taught passionate Associate Software
            Engineer from Pakistan, currently working at Olabooks web and app as
            a FrontEnd Software Engineer. I've been building stuff on the web
            since when I was in 6th standard, I've made countless side projects
            and I also posses magical powers of using reactjs, nextjs and others
            to build delightful user interfaces.
          </p>
          <p className="py-2 text-gray-600">
            I also love doing open source development, I actively maintain
            various notable open source projects with over. Fascinated with how
            intricate programming can be I was quickly drawn to learn more. I
            started learning javascript and was even more enthused with making
            websites interactive. I then started freelancing.
          </p>
          {/* <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
