import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialData, serviesData, othersData } from './LinksData';

function SocialLinks() {

    return (
        <div>
            <Link to="/">
                <h6>تواصل معنا</h6>
            </Link>
            <address className="pt-2 pb-2">
                الرياض - مخرج ١٥<br /> خلف السيف جاليري
            </address>
            <div className="social-icons">
                {socialData.map((social, index) => (
                    <a key={index} href={social.link} target='blank'>
                        <FontAwesomeIcon icon={social.icon} />
                    </a>
                ))}
            </div>
        </div>
    )
};

function ServiesLinks() {
    return (
        <ul className='flex-column'>
            {serviesData.map((service, index) => (
                <li key={index} className='footer-links'>
                    <a href={service.link} className='nav-link p-1' aria-current="page" >
                        {service.title}</a>
                </li>
            ))}
        </ul>
    )
};

function GeneralLinks() {
    return (
        <ul className='flex-column'>
            {othersData.map((other, index) => (
                <li key={index} className='footer-links'>
                    <a href={other.link} className='nav-link p-1' aria-current="page" >
                        {other.title}</a>
                </li>
            ))}
        </ul>
    )
};

export { SocialLinks, ServiesLinks, GeneralLinks };