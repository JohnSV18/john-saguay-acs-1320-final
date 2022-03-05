import Like from './Like';
import './Band.css';

function Band(props) {
    const { band_name, fans, formed, origin, split } = props
    if (split === '-') {
        return (
            <div className="Band">
                <div>
                    <h2>{ band_name }</h2>
                    <p>Origin:</p> { origin }
                    <p>Fans:</p> { fans }
                    <p>Formed:</p> { formed }
                </div>       
                <Like
                    min={0}
                    max={10000}
                    step={1}
                />
            </div>
        )
    }
    else {
        return (
            <div className="Band">
                <h2>{ band_name }</h2>
                 <p>Origin:</p> { origin }
                 <p>Fans:</p> { fans }
                 <p>Formed:</p> { formed }
                 <p>Split:</p> { split }
            </div>
        )
    }

    }
    
export default Band;
