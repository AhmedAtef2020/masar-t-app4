import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Search from "../components/Search"
import Account from "../components/Account";
import { ServiceData } from "./ServiceData"


const navPages = [{
    pageName: "خدماتنا",
    pageLink: "/services",
    pageNameEn: "services",
    addClass: "servHBtn",
},
{
    pageName: "مكتبة مسار",
    pageLink: "/masarLibrary",
    pageNameEn: "library",
    addClass: "",
}, {
    pageName: "من أعمالنا",
    pageLink: "/profile",
    pageNameEn: "profile",
    addClass: "",
}, {
    pageName: "عن مسار",
    pageLink: "/aboutUs",
    pageNameEn: "about",
    addClass: "",
},];

export default function NavItems() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="col navbar navbar-expand-md pb-3 pb-md-0 pt-md-0 justify-content-end">
            <button
                className="navbar-toggler border-0"
                type="button"
                onClick={toggleNav}
                aria-expanded={isNavOpen ? "true" : "false"}
            >
                {isNavOpen ?

                    <FontAwesomeIcon icon={faX} />
                    :
                    <FontAwesomeIcon icon={faBars} />
                }
            </button>
            <div className={`collapse navbar-collapse justify-content-between ${isNavOpen ? 'show' : ''}`} id="collapsibleNavbar">
                <div className="d-flex flex-column flex-md-row align-items-center position-relative">
                    {navPages.map((page, index) => (
                        <Link key={index} to={page.pageLink}
                            className={`header-nav nav-link text-center ${page.addClass}`}>
                            {page.pageName}
                            <ul id="servDropdown" className="flex-wrap position-absolute bg-light-gray border border-white rounded p-2 col-12 list-unstyled shadow">
                                {ServiceData.map((data, index) => (
                                    <li className="col-12 col-md-4">
                                        <Link key={index} to={data.btnLink} className="dropdown-item px-1 py-2">
                                            {data.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Link>
                    ))}

                </div>
                <Search />
                <Account />
            </div>
        </div>
    );
}

