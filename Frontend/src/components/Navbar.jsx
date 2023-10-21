import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1 style={{ color: "white" }}>Sk</h1>
      </Link>
      <nav>
        <ul
          style={{
            paddingTop: "10px",
          }}
        >
          <li>
            <Link to={"/cart"}>
              <button className="btn-cart">Cart-page</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
