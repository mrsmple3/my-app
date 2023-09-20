import react from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-around items-center bg-gray-500 text-white ">
      <span className="font-bold">React 2023</span>

      <span>
        <Link to="/" className="mr-2">
          Prodacts
        </Link>
        <Link to="/about" className="mr-2">
          About
        </Link>
      </span>
    </nav>
  );
}
