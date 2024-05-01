import AboutData from "../components/AboutData"


export default function aboutUs() {
    return (
        <div className="aboutPage">
            <img src="./images/AboutUs-Img.jpg" alt="about header" className="py-4 w-100" />
            <div className="container d-flex justify-content-between align-items-start flex-wrap text-center text-md-start">
                <h3 className="col-12 col-md-2 mt-2 c-darkOrange text-center-md" >من نحن؟</h3>

                <p className="col-12 col-md mt-3 mt-md-5 px-5 ps-md-0 lh-lg">{AboutData.about}</p>

                <img src="./images/masar-logo-about.jpg" alt="masar Logo" className="col-3 m-auto d-none d-md-block" />
            </div>
            <div className="bg-light-blue-10 mx-5 py-3 rounded">
                <div className="container d-flex justify-content-between align-items-start flex-wrap text-center text-md-start">
                    <h5 className="col-12 col-md-2 mt-2 c-darkBlue text-md-end">
                        رُؤيتنا
                    </h5>
                    <p className="col-12 col-md mt-3 mt-md-5 px-5 ps-md-0 lh-lg">{AboutData.vision}</p>
                </div>
            </div>
            <div className="container d-flex justify-content-between align-items-start flex-wrap text-center text-md-start mt-3">
                <h5 className="col-12 col-md-2 mt-2 c-darkBlue text-md-end">
                    أهدافنا
                </h5>
                <p className="col-12 col-md mt-3 mt-md-5 px-5 ps-md-0 lh-lg">{AboutData.goal}</p>
            </div>
        </div>
    );
};
