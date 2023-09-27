
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationContainer = ({card}) => {

    const{id,image,components,te_color,color, comp_color, price, title} = card;

    const textStyle = {
        backgroundColor: color // Use the card_bg value as the background color
    };
    const backStyle = {
      color: te_color
    }
    const buttonStyle = {
        backgroundColor: te_color
    }
    const compoStyle = {
      backgroundColor: comp_color
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl" style={textStyle}>
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <p className='font-bold w-[80px] h-8 text-center items-center' style={compoStyle}>{components}</p>
    <p className='font-extrabold'>{title}</p>
    <p><span style={backStyle}>${price}</span></p>
    <div className="card-actions justify-end">
      <Link to={`/cards/${id}`}><button style={buttonStyle} className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};
DonationContainer.propTypes = {
    card: PropTypes.object
}

export default DonationContainer;