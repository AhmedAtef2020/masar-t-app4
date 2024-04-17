import { Link } from "react-router-dom";
import NavItems from "../components/NavItems"
import Search from "../components/Search"
import Account from "../components/Account";

function Header() {
  return (
    <header className="navbar navbar-expand pt-0 pb-0 bg-light-gray">
      <div className="container">
        <Link to="/">
          <img className="logo-header" src="./images/masar-logo-header.png" />
        </Link>
        <NavItems />
        <Search />
        <Account />
      </div>
    </header>

  );
}

export default Header;
