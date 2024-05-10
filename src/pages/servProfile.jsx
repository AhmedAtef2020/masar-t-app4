import ServSideBar from "../components/ServSideBar";
import { SevrHeadName } from "../components/SevrHeadName";


export default function servProfile() {

    return (
        <div className="container d-md-flex">
            <ServSideBar />
            <div className="pt-4">
                <SevrHeadName title="البروفايل" />
            </div>
        </div>
    );
};