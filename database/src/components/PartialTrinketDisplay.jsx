import "./css/PartialTrinketDisplay.css";
import "./css/Trinkets.css"
import {Outlet, Link} from "react-router-dom";

const PartialTrinketDisplay = (props) => {
    const classN = props.cat === "home" ? "row1of3" : "col1of2";
    const link = props.cat === "home" ? "../ExampleTrinket" : "../ExampleCollection";
    return (
            <section className={classN}><Link to={link}>
                <img className="sub-image" src={`https://trinket-database-backend.onrender.com/${props.sub_image}`} alt={props.name}/>
                <h3>{props.label}</h3>
            </Link></section>
    );
};

export default PartialTrinketDisplay;