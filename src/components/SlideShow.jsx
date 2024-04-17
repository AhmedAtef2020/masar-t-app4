import { Link } from "react-router-dom";
import { ServiceData } from "./ServiceData"

export default function SlideShow() {
    return (
        <div id="carouselId" class="carousel slide mt-4 container" data-bs-ride="carousel">
            <ol class="carousel-indicators list-none">
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
            <div class="carousel-inner" role="listbox">
                {ServiceData.map((service, index) => (
                    <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                        <div className="carousel--data p-3 text-white">
                            <h5>{service.title}</h5>
                            <p>{service.description}</p>
                            <Link type="button" to={service.btnLink} className="w-100 text-center text-decoration-none btn-masar btn-dark-orange">{service.btnCaption}</Link>
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
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    )
};