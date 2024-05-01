import { Link } from "react-router-dom";
import NavItems from "../components/NavItems"


function Header() {
  return (
    <header className="py-0 bg-light-gray">
      <div className="container-md d-flex">
        <Link to="" className="col-2">
          <img className="logo-header my-2" src="./images/masar-logo-header.png" alt="Masar logo" />
        </Link>
        <NavItems />
      </div>
    </header>

  );
}

export default Header;


// <div className="container-md justify-content-md-center justify-content-lg-between align-items-baseline align-items-md-center">
