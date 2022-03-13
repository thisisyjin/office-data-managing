import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="comLogo">
      <Link to="/">
        <img src={logo} width="300" alt="Space For You" />
      </Link>
    </div>
  );
}

export default Logo;
