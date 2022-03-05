import { useState } from 'react';
import './Like.css';

function Like(props) {
    const {step, min, max} = props;
    const [likes, setLikes] = useState(0);

    return (
        <div className='Like'>
            <button onClick={() =>{
                if (likes >= min && likes <= max) {
                    setLikes(likes + step)
                }}}>👍</button>
            <h1>{likes}</h1>
            <button onClick={() => {
                if (likes >= min && likes <= max) {
                    setLikes(likes - step)
                }}}>👎</button>
        </div>
    )
}
export default Like;
