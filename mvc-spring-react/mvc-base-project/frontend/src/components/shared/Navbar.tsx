import { Link } from "react-router-dom";
function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        Base Project
      </Link>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>Início </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/people-list"}>Pessoas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/dept-list"}>Departamentos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;