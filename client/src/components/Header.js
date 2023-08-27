import { NavLink } from "react-router-dom";

function Header(props) {
  const toggleMode = () => {
    props.setDarkMode(!props.darkMode);
  };

  return (
    <nav className="navbar navbar-expand-lg position-sticky mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Jeremy Boyer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="/about">
                About
              </a> */}
              <NavLink to="/" activeClassName="active" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                activeClassName="active"
                className="nav-link"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                className="nav-link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
