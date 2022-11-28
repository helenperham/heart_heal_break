import React from 'react'
import heart from './images/heart.png';
// function HeartCard(props) {
//     return (
//         <div className="card">
//             <img src={props.image} alt={props.name} />
//             <p>{props.name}</p>
//         </div>
//     )
// }
export const Heart = () => {
    return (
        <div>
            <img className="image" src={heart} />
        </div>
    )
}


// export default HeartCard,
