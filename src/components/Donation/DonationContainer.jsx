import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationContainer = ({card}) => {

    const{id,image,components,te_color,color, comp_color, price, title} = card;

    const textStyle = {
        backgroundColor: color  
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
        <div className="card m-2 card-side bg-base-100 shadow-xl" style={textStyle}>
  <figure><img  className='h-full md:w-72 w-56' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <p className='  w-[80px] h-6  text-center items-center rounded-md' style={{backgroundColor:comp_color ,color: te_color}}>{components}</p>
    <p className='font-bold card-title'>{title}</p>
    <p><span className='font-bold' style={backStyle}>${price}</span></p>
    <div className="card-actions justify-start ">
      <Link to={`/cards/${id}`}><button style={buttonStyle} className="btn btn-primary ">View Details</button></Link>
    </div>
  </div>
</div>
    );
};
DonationContainer.propTypes = {
    card: PropTypes.object
}

export default DonationContainer;