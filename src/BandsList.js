import Band from "./Band";
import data from "./metal.json";
import './BandsList.css';

function BandsList() {
    const bands = data.map((obj, i) => {
        const { band_name, fans, formed, origin, split } = obj
        return (
            <Band
                id={i}
                key={band_name}
                band_name={band_name}
                fans={fans}
                formed={formed}
                origin={origin}
                split = {split}
            />
        )
    })
    return (
        <div className="BandsList">
            {bands}
        </div>
    )
}
export default BandsList;