import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>BlueCollar Electrical Solutions</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
     
    </div>
    <div>
      <ul>
        <img className="img" src="https://media.istockphoto.com/vectors/electrician-services-concept-banner-header-vector-id1188403001?k=20&m=1188403001&s=170667a&w=0&h=ZNe9PyW69pXjqo_-NCQO6e3G2WX0rOF0f0SlP-4r-ys="/>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
