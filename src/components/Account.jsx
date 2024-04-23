import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Account() {
    return (

        <div className="user-icon d-flex flex-nowrap justify-content-center">
            <FontAwesomeIcon icon={faBell} className="text-white bg-light-blue d-none" />
            <FontAwesomeIcon icon={faCartShopping} className="text-white bg-light-blue" />
            <FontAwesomeIcon icon={faUser} className="text-white bg-light-orange" />
        </div>

    )
};



