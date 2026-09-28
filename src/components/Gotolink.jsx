import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Gotolink({ content, linkpath }) {
  return (
    <Link
      to={linkpath}
      className="mt-10 inline-flex items-center text-base font-semibold leading-5 text-gray-700 hover:text-teal-700 hover:underline"
    >
      {content}
      <span className="ml-2.5 flex items-center">
        <motion.svg
          className="h-6 w-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 10"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" fill="none" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </motion.svg>
      </span>
    </Link>
  );
}
