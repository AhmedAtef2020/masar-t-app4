import ServSideBar from "../components/ServSideBar";
import { SevrHeadName } from "../components/SevrHeadName";


export default function ServBanner() {

    return (
        <div className="container d-md-flex">
            <ServSideBar />
            <div className="pt-4">
                <SevrHeadName title="لافتات دعائية" />
            </div>
        </div>
    );
};