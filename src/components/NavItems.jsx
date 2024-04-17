import { Link } from "react-router-dom";

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
    return (
        <div className="d-flex flex-row justify-center">
            {navPages.map((page, index) => (
                <Link key={index} to={page.pageLink} className="header-nav nav-link">
                    {page.pageName}
                </Link>
            ))}

        </div>
    )
};