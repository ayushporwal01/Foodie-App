import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

const BottomHeader = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-white space-x-5  dark:bg-black shadow-top dark:border-t-1 dark:border-white  p-4 flex justify-around md:hidden z-50 shadow-t">
      {/* Navigation */}
      <ul className="flex justify-center items-center space-x-24">
        <li className="font-medium text-gray-700 dark:text-white hover:text-[#e08300]">
          <Link to="/">
            {" "}
            <MdHomeFilled size={26} />
          </Link>
        </li>
        <li className="font-medium text-gray-700 dark:text-white hover:text-[#e08300]">
          <Link to="/about">
            <IoPersonSharp size={26} />
          </Link>
        </li>
        <li className="font-medium text-gray-700 dark:text-white hover:text-[#e08300]">
          <Link to="/contact">
            <IoIosCall size={26} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomHeader;
