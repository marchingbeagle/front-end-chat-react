import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <nav className="list-none flex p-8 gap-4 w-full justify-center items-center">
        <li className="p-4 bg-blue-400 text-white rounded m-0">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="p-4 bg-blue-400 text-white rounded m-0">
          <Link to={"/Chat"}>Chat</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
