import { ServiceData } from "./ServiceData"
import { Link } from "react-router-dom";


export default function ServiceComp() {
    return (
        <div className="bg-dark-orange text-white py-4 mt-4">
            <div className="container d-flex flex-wrap gap-3 ">
                <div className="row-1 col-12 col-md-2">
                    <h3>خدماتنا</h3>
                    <p>تجدون هنا العديد من الخدمات التي تنتظرونها</p>
                </div>
                {ServiceData.map((service, index) => (
                    <div key={index} className="col bg-white rounded px-4 py-2 text-black text-center w-auto">
                        <Link
                            className={`text-decoration-none text-black ${service.status}`}
                            to={service.status === "active" && service.btnLink} >

                            <img className="serv-ico p-1 mt-1 mb-2" src={service.icon} alt={service.imgAlt} />

                            <h6>{service.title}</h6>
                        </Link>
                    </div>
                ))}

            </div>

        </div>
    )
}