import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg bg-light"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BioMC
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">
                About
              </Link>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
              <Link className="nav-link" to="/lessons">
                Lessons
              </Link>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
