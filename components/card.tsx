import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  name: string;
  link?: string;
  description: string;
  href: string;
  source: string;
}

export const Card = ({ image, name, link, description, source }: CardProps) => {
  return (
    <div className="  max-w-sm m-2  border  rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-slate-700 ">
      <Link href="#">
        <Image
          className="rounded-t-lg w-full max-h-48"
          src={image}
          alt=""
          width="3300"
          height="5100"
        />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-400">
          {description}
        </p>
        {link && (
          <Link
            href={link}
            className="mr-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Live
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        )}

        <Link
          href={source}
          className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Code
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
