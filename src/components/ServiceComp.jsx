import { ServiceData } from "./ServiceData"
import { Link } from "react-router-dom";


export default function ServiceComp() {
    return (
        <div className="bg-dark-orange text-white py-4 mt-4">
            <div className="container d-flex flex-wrap justify-content-end gap-3">
                <div className="col-sm-2">
                    <h3>خدماتنا</h3>
                    <p>تجدون هنا العديد من الخدمات التي تنتظرونها</p>
                </div>
                {ServiceData.map((service, index) => (
                    <div key={index} className=" bg-white rounded px-4 py-2 text-black text-center w-25 justify-content-between">
                        <Link className="text-decoration-none text-black" to={service.btnLink}><img className="serv-ico p-1 mt-1 mb-2" src={service.icon} alt={service.imgAlt} />
                            <h6>{service.title}</h6>
                        </Link>
                    </div>
                ))}

            </div>

        </div>
    )
}