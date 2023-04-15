import React from "react";
import Link from "next/link";
import Image from "next/image";
const About = () => {
  return (
    <div className="p-10 lg:px-60 py-20 flex-col">
 <div className="relative">
  <div className="absolute top-0 left-0 animate-fall text-4xl" style={{left: "calc(90vw * (Math.random() - 0.5))"}}>
👋
  </div>
</div>
      <h2 className="text-center text-4xl font-semibold text-yellow-400 mb-12 transfrom -rotate-2">
        A Web Developer
      </h2>
      <p className="text-slate-100 text-2xl mb-4 max-w-prose m-auto indent-8 ">
        Hi. My name is Andr&eacute;s Beltr&aacute;n. I&apos;m a Web developer with a
        background in Philosophy. I aim to write code that is easy to understand
        and to integrate to existing codebases.
      </p>
      <p className="text-slate-100 text-2xl mb-4 max-w-prose m-auto indent-8">
        {" "}
        I currently contribute to{" "}
        <Link
          href="https://greenstand.org/"
          target="_blank"
          className="underline decoration-emerald-500 decoration-4"
        >
          {" "}
          Greenstand
        </Link>
        , addressing issues that relate to <strong>React</strong>,{" "}
        <strong>Material UI</strong>, or calls to the <strong>API</strong>, and
        to{" "}
        <Link
          href="https://buddhistuniversity.net/"
          target="_blank"
          className="underline decoration-red-500 decoration-4"
        >
          The Open Buddhist University
        </Link>
        , adding teacher&apos;s biographies in markup language.
      </p>
      <Image
        height={640}
        width={480}
        className="w-25 h-25  m-auto pt-8 transform  rotate-2 rounded-lg"
        src="https://ik.imagekit.io/4p3voulmt/Andres/2021-10-07-154522.jpg?updatedAt=1681152067427"
        alt="user photo"
      />
    </div>
  );
};

export default About;
