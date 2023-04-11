import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="py-20">
      <h2 className="text-center text-4xl font-semibold text-yellow-400 mb-12 transfrom -rotate-2">
        Contact me!
      </h2>
      <p className="text-slate-100 text-2xl mb-4 max-w-prose m-auto indent-8 ">
        Thank you for taking the time to check out some of my projects and for
        your interest in contacting me.
      </p>
      <p className="text-slate-100 text-2xl mb-4 max-w-prose m-auto indent-8">
        Here are some places of the web where you may find more information or
        contact me:
      </p>
<div className="grid justify-center mt-24 translate rotate-3">
      <ul>
        <li>
          <Link
            href="https://github.com/andres039"
            className="text-2xl mb-4 max-w-prose m-auto text-purple-400 "
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href="linkedin.com/in/andresbeltrangarcia/"
            className="text-emerald-400 text-2xl mb-4 max-w-prose m-auto"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href="https://andres039.hashnode.dev/fetch-con-typescript"
            className="text-red-600 text-2xl mb-4 max-w-prose m-auto"
          >
            HashNode
          </Link>
        </li>
        <li>
          <Link
            href="mailto:andres039039@hotmail.com"
            className="text-yellow-600 text-2xl mb-4 max-w-prose m-auto"
          >
            Email
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Contact;
