 

// const Card = ({card}) => {

//   const {picture, card_bg,text_bg,category_bg, category, title}= card || {}

//   return (
//       <div>
//          <div className="mx-auto card w-72 bg-base-100 shadow-xl">
// <figure><img className="w-72" src={picture} alt="Shoes" /></figure>
// <div className="card-body rounded-b-2xl" style={{ backgroundColor: card_bg }}>
// <p className=" w-20 pl-2 rounded-md" style={{ backgroundColor: category_bg, color: text_bg}}>{category}</p>
//   <h2 className="card-title w-60" style={{ color: text_bg}} >{title}</h2>
// </div>
// </div>



 
//       </div>
//   );
// };

// export default Card;

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Card = ({card}) => {

const {id,image,color,te_color, comp_color,  components, title}= card || {}

const textStyle = {
backgroundColor: color // Use the card_bg value as the background color
};
const backStyle = {
color: te_color
}
const compoStyle = {
backgroundColor: comp_color
}

return (
<div>
<Link to={`/cards/${id}`}>
<div className="card w-70 bg-base-100 shadow-xl" style={textStyle}>
<figure><img src={image} alt="Shoes" /></figure>
<div className="card-body">
<p style={compoStyle} className="w-20 h-9 rounded-md text-center">{components}</p>
<h2 className="card-title" style={backStyle}>{title}</h2>
</div>
</div>
</Link>
</div>

);
};
Card.propTypes = {
card: PropTypes.object
}

export default Card;