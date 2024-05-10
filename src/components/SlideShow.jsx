import { Link } from "react-router-dom";
import { ServiceData } from "./ServiceData"

export default function SlideShow() {
    return (
        <div id="carouselId" className="carousel slide mt-4 container-md " data-bs-ride="carousel">
            <ol className="carousel-indicators list-none">
                {ServiceData.map((service, index) => (
                    <li key={index}
                        data-bs-target="#carouselId"
                        data-bs-slide-to={index}
                        className={index === 0 && "active"}
                        aria-current={index === 0 && "true"}
                        aria-label={service.imgAlt}
                    ></li>
                ))}
            </ol>
            <div className="carousel-inner" role="listbox">
                {ServiceData.map((service, index) => (
                    <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item "}>
                        <div className="carousel--data p-3 text-white">
                            <h5>{service.title}</h5>
                            <p className="d-none d-md-block">{service.description}</p>
                            <Link type="button" to={service.btnLink} className="w-100 text-center text-decoration-none btn-masar btn-dark-orange d-none d-sm-block">{service.btnCaption}</Link>
                        </div>
                        <img
                            src={service.imgSrc}
                            className="w-100 d-block"
                            alt={service.imgAlt}
                        />
                    </div>
                ))}

            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
};