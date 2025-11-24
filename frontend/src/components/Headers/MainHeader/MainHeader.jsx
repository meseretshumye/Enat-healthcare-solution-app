import { images } from "../../../constants/AssetsContainer";
import { Link } from "react-router";
const MainHeader = () => {
  
  return (
    <>
      {/* ======= main header section start =======  */}
      <section className="main-header">
        <section className="main-header-container">
          <section className="logo-wrapper">
            <Link to="/">
              <img
                src={images.enatLogo}
                alt="enat-health-care-solutions-logo"
              />
            </Link>
          </section>

          <section className="logo-sm-wrapper">
            <Link to="/">
              <img
                src={images.enatLogoSM}
                alt="enat-health-care-solutions-logo-sm"
              />
            </Link>
          </section>
          {/* ======= Desktop Navigation ======= */}
          <section id="nav-bar" className="nav-bar">
            <ul className="nav-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/departments">Departments</Link>
              </li>
              <li>
                <Link to="/doctors">Doctors</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link className="main-btn-light" to="/sign-in">
                  Sign In
                </Link>
              </li>
              <li>
                <Link className="main-btn" to="/appointment">
                  Make an Appointment
                </Link>
              </li>
            </ul>
          </section>

          {/* ======= Hamburger Menu (Mobile) ======= */}
          <section className="hamburger-menu d-lg-none">
            <button
              className=" btn-primary hamburger-btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileOffcanvas"
              aria-controls="mobileOffcanvas"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </section>
        </section>
      </section>
      {/* ======= main header section end =======  */}
      {/* ************************************************************ */}
      {/* ======= Mobile Offcanvas ======= */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="mobileOffcanvas"
        aria-labelledby="mobileOffcanvasLabel"
      >
        <div className="offcanvas-header">
          {/* Mobile Logo */}
          <section
            className="logo-wrapper d-flex d-md-none"
            id="mobileOffcanvasLabel"
          >
            <Link to="/">
              <img src={images.favicon} alt="enat-logo-mobile" />
            </Link>
          </section>

          {/* Small Logo */}
          <section
            className="logo-sm-wrapper d-none d-md-flex"
            id="mobileOffcanvasLabel"
          >
            <Link to="/">
              <img src={images.favicon} alt="enat-logo-sm" />
            </Link>
          </section>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <section className="mobile-nav-bar">
            <ul className="nav-items list-unstyled d-flex flex-column gap-3">
              <li>
                <Link to="/" onClick="offcanvas">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick="Offcanvas">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick="offcanvas">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/departments" onClick="offcanvas">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/doctors" onClick="offcanvas">
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick="offcanvas">
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  className="main-btn-light"
                  to="/sign-in"
                  onClick="offcanvas"
                >
                  Sign In
                </Link>
              </li>

              <li>
                <Link
                  className="main-btn"
                  to="/appointment"
                  onClick="offcanvas"
                >
                  Make An Appointment
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
