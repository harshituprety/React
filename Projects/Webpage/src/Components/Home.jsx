import { Link, Outlet } from "react-router-dom";
import Hero from "./Hero";
import Card from "./Card";
import Theme from "./Theme";

const Home = () => {
  return (
    <>
      <nav className="bg-amber-700 shadow-lg  w-full top-0">
        <div className="flex justify-around items-center">
          <a href="#" className="text-white text-2xl font-bold p-1.5">
            NAVBAR
          </a>
          <ul className="text-gray-300 text-xl flex justify-center gap-9">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>

          <Theme />
        </div>
      </nav>
    </>
  );
};

export default Home;
