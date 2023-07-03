import { Link } from "react-router-dom";
import logo from "../../../public/mjkibira.png";

const Navbar = () => {
  return (
    <div className="navbar mb-9 bg-[#F2921D]">
      <div className="flex-1 ml-24 mt-8 mb-5">
        <img src={logo} alt="" />
      </div>
      <div className="flex-none">
        <ul className="menu text-sm font-bold uppercase menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Courses</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <Link to='/signin'>Log in</Link>
          </li>
          <li>
          <Link to='/signup'>Sign up</Link>
          </li>
        </ul>
      </div>
      <hr className="w-60 h-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  );
};

export default Navbar;
