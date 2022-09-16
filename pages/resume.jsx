import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Arbab Tahir | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/me.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Arbab Tahir</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/marbabtahir/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/arbab-tahir"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span> Complex Problem
              Solving <span className="px-1">|</span> Build Software
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Build Software</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I'm a Front-end web developer who loves writing code, building things,
          and solving problems. I build software and write code. I write bugs
          and call them features. I love learning new things and playing with
          different technologies, projects and tools. I know multiple
          programming languages like Html, CSS, and Javascript (ReactJs,
          NextJs), and I use Frameworks for the front-end like (Bootstrap,
          Vuejs, React Bootstrap) and some others. Javascript is my major
          programming language. I work with different technologies every day. I
          like learning new things. In my free time, I read books, read poetry.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span> CSS
            <span className="px-2">|</span> React
            <span className="px-2">|</span> Next
            <span className="px-2">|</span> Redux
            <span className="px-2">|</span> Firebase
          </p>
          {/* <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Front-end Software Engineer
            </span>
            <span className="px-2">|</span>E-Khata erp
          </p>
          <p className="py-1 italic">Full Time (2021 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold"> Front-end Software Engineer</span>
            <span className="px-2">|</span>Ola Books
          </p>
          <p className="py-1 italic">Full Time (2022 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, SCSS, and NEXTJS with REDUX.
            </li>
            <li>Handle different modules using latest technologies as need.</li>
            {/* <li>
              Manage high stress 911 situations such as medical emergencies,
              traumatic emergencies, and water accidents
            </li>
            <li>
              Public outreach and relations for the municipality from healthcare
              awareness to training methods.
            </li> */}
          </ul>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Punjab College Of Science</span>
            <span className="px-2">|</span> Lahore, Pakistan
          </p>
          <br />
          <p className="py-1 italic">(ICS, Computer Science)</p>
          <p className="py-1 italic">Intermediate (2021 - 2022)</p>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">City Model High School</span>
            <span className="px-2">|</span> Narowal, Pakistan
          </p>
          <br />
          <p className="py-1 italic">(Computer Science)</p>
          <p className="py-1 italic">Matriculation (2019 - 2020)</p>
        </div>
      </div>
    </>
  );
};

export default resume;
