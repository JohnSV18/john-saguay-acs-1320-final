import MetalMeta from "./MetalMeta";
import './Heading.css';
function Heading() {
    return(
        <div className="Heading">
            <h1 className="HeadingName">John Saguay</h1>
            <p className="HeadingClass">ACS 1320 Final Assessment</p>
            <div className="HeadingMetalMeta">
                <MetalMeta />
            </div>
            
        </div>
    )
}
export default Heading;
