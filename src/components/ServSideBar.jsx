import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ServiceList from "../components/ServiceList"

export default function ServSideBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() { setIsOpen(!isOpen) };

    return (
        <div className="mt-4 me-4">
            <h3 className="c-darkOrange col-12">خدماتنا</h3>
            <div className={`d-block d-sm-none slide-menu-container ${isOpen ? 'open' : ''}`}>
                <div className="text-end bg-light-orange text-white fs-6 rounded pe-2 pt-1" onClick={toggleMenu}>
                    {isOpen ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faEllipsis} />}
                </div>
                <div className="px-5">
                    <ul
                        className="list-group pt-2 ">
                        <ServiceList />

                    </ul>

                </div>
            </div>
            <div className="d-none d-sm-flex flex-wrap justify-content-between">
                <ul
                    className="list-group pt-2 h-100 ">
                    <ServiceList />
                </ul>
            </div>
        </div>
    )
}