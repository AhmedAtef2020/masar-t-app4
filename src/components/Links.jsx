import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialData, serviesData, othersData } from './LinksData';

function SocialLinks() {

    return (
        <div className="col-9 col-sm-5 col-md-4 col-lg-3">
            <Link to="/">
                <h6>تواصل معنا</h6>
            </Link>
            <address className="pt-2 pb-2">
                الرياض - مخرج ١٥<br /> خلف السيف جاليري
            </address>
            <div className="social-icons">
                {socialData.map((social, index) => (
                    <Link key={index} to={social.link} target='blank'>
                        <FontAwesomeIcon icon={social.icon} />
                    </Link>
                ))}
            </div>
        </div>
    )
};

function ServiesLinks() {
    return (
        <ul className='d-none d-lg-block col-5 col-lg-3'>
            {serviesData.map((service, index) => (
                <li key={index} className='footer-links'>
                    <Link to={service.link} className='nav-link p-1' aria-current="page" >
                        {service.title}</Link>
                </li>
            ))}
        </ul>
    )
};

function GeneralLinks() {
    return (
        <ul className='col-9 col-sm-5 col-md-4 col-lg-3'>
            {othersData.map((other, index) => (
                <li key={index} className='footer-links'>
                    <Link to={other.link} className='nav-link p-1' aria-current="page" >
                        {other.title}</Link>
                </li>
            ))}
        </ul>
    )
};

export { SocialLinks, ServiesLinks, GeneralLinks };