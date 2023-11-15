import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="list-none">
        <li className="">
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Chat"}>Chat</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
