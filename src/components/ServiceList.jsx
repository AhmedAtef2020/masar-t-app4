import { ServiceData } from "../components/ServiceData"
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function ServiceList() {
    const location = useLocation();
    const [selectedService, setSelectedService] = useState("");


    // Set selectedService based on the current location
    useEffect(() => {
        // Extract the pathname from the location object
        const pathname = location.pathname;
        setSelectedService(pathname);
    }, [location]);

    return (
        <>
            {
                ServiceData.map((data, index) => (
                    <li
                        key={index}
                        className={`list-group-item list-group-item-action ps-2 ${selectedService === data.btnLink ? 'active' : ''}`} aria-current={selectedService === data.btnLink && "true"}>
                        <Link to={data.status === "active" && data.btnLink} className={`d-block text-decoration-none text-black ${data.status} ${selectedService === data.btnLink ? 'text-white' : ''}`} aria-disabled={data.status !== "active" && "true"}>
                            {data.title}
                        </Link>
                    </li>
                ))
            }
        </>
    )
}