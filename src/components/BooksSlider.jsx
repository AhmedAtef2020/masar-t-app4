import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BooksData } from "../components/BooksData"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, borderRadius: "50%", backgroundColor: "#bbbdbf", textAlign: "center", paddingTop: "1px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, borderRadius: "50%", backgroundColor: "#bbbdbf", textAlign: "center", paddingTop: "1px" }}
            onClick={onClick}
        />
    );
}


export default function BooksSlider() {
    const settings = {
        className: "center",
        centerPadding: "60px",
        dots: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        swipeToSlide: true,
        rtl: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: false,
                    nextArrow: null,
                    prevArrow: null,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container container">
            <Slider {...settings}>
                {BooksData.map((book, index) => (
                    <div className="book-container text-center">
                        <Link className="text-decoration-none text-black"
                            to={book.link}>
                            <img key={index}
                                src={book.img}
                                className="m-auto w-50 w-md-75 d-block rounded-2"
                                alt={book.imgAlt}
                            />
                            <div className="book-title w-75 m-auto py-1 px-2">
                                <p>{book.title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );

}