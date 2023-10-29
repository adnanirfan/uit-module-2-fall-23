import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Contacts</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signUp"}>SignUp</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
