import { ServiceData } from "./ServiceData";

function SevrHeadName(props) {
    const service = ServiceData.filter(data => data.title === props.title);

    return (
        <>
            <div className="d-flex gap-2 align-items-center c-darkBlue">
                <img
                    className="sm-ico"
                    src={`.${service[0].icon}`}
                    alt={service[0].imgAlt} />
                <h5>{service[0].title}</h5>
            </div>
        </>
    )
}

export { SevrHeadName };