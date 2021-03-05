import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/style.css";

// const Navbar = () => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link href="/">
//       <a className="navbar-brand">LEA WILHELMER</a>
//     </Link>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>

//     <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link href="/">
//             <a className="nav-link">PROJECTS</a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/about">
//             <a className="nav-link">ABOUT</a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/contact">
//             <a className="nav-link">CONTACT</a>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        LEA WILHELMER
      </Link>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"></div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
      <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
      </Link>
          </li>
          <li className="nav-item">
      <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
      </Link>
          </li>
          <li className="nav-item">
      <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
      </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;