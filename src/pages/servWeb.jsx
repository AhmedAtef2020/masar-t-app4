import ServSideBar from "../components/ServSideBar";
import { SevrHeadName } from "../components/SevrHeadName";


export default function ServWeb() {

    return (
        <div className="container d-md-flex">
            <ServSideBar />
            <div className="pt-4">
                <SevrHeadName title="المواقع والتطبيقات" />
            </div>
        </div>
    );
};
