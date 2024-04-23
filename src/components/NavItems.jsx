import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Search from "../components/Search"
import Account from "../components/Account";


const navPages = [{
    pageName: "خدماتنا",
    pageLink: "/sevices",
},
{
    pageName: "مكتبة مسار",
    pageLink: "/masar-library",
}, {
    pageName: "من أعمالنا",
    pageLink: "/our-profile",
}, {
    pageName: "عن مسار",
    pageLink: "/about-us",
},];

export default function NavItems() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    // <div className="aling-self-end flex-row-reverse align-items-baseline pb-3 pb-md-0 pe-2 pe-sm-1">

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
                <div className="d-flex flex-column flex-md-row align-items-center">
                    {navPages.map((page, index) => (
                        <Link key={index} to={page.pageLink} className="header-nav nav-link text-center w-75 h-100">
                            {page.pageName}
                        </Link>
                    ))}
                </div>
                <Search />
                <Account />
            </div>
        </div>
    );
}


// export default function NavItems() {
//     return (
//         <div className="d-flex aling-self-end flex-row-reverse align-items-baseline pb-3 pe-2 pe-sm-1">
//             <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//                 <span className="navbar-toggler-icon">
//                 </span>
//             </button>
//             <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
//                 {navPages.map((page, index) => (
//                     <Link key={index} to={page.pageLink} className="header-nav nav-link">
//                         {page.pageName}
//                     </Link>
//                 ))}
//                 <Search />
//                 <Account />
//             </div>
//         </div>
//     )
// };

