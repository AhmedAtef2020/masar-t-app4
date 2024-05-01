import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Account() {
    return (

        <div className="user-icon d-flex flex-nowrap justify-content-center dropdown pt-2 pt-sm-0">
            <FontAwesomeIcon icon={faBell} className="user-bell text-white bg-light-blue d-none" />
            <FontAwesomeIcon icon={faCartShopping} className="user-cart text-white bg-light-blue" />
            <FontAwesomeIcon type='button' icon={faUser} className="user-account text-white bg-light-orange dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" />

            <ul className="dropdown-menu dropdown-menu-end text-end bg-med-gray border-white" aria-labelledby="userDropdown">
                <li><a className="dropdown-item" href="#">تسجيل الدخول</a></li>
                <li><a className="dropdown-item" href="#">إنشاء حساب</a></li>
            </ul>


        </div>


    )
};


