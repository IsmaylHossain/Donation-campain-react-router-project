import PropTypes from 'prop-types';
import swal from 'sweetalert';

const CardDetail = ({cardDetails}) => {

    
    const{id,image,te_color, description, price, title} = cardDetails;

    const textStyle = {
        backgroundColor: te_color 
    };

    const handleAddToDonate=()=>{

        
        const addedDonateArray = [];

        const donateItems = JSON.parse(localStorage.getItem('donate'))

        if(!donateItems){
            addedDonateArray.push(cardDetails)
            localStorage.setItem('donate', JSON.stringify(addedDonateArray));
            swal("Good job!", "Your Donation done!", "success");
        }

        else{

            const isExists = donateItems.find(cardDetails => cardDetails.id == id)

            if(!isExists){
                addedDonateArray.push(...donateItems, cardDetails)
            localStorage.setItem('donate', JSON.stringify(addedDonateArray));
            swal("Good job!", "Your Donation done!", "success");
            }
            else{
                swal("Error!", "Already Added!", "error");
            }


            
        }
    }

    return (
        <div className="container md:my-10 p-2 flex flex-col items-center bg-white">
        <figure className="relative w-full rounded-2xl">
            <img className="w-full rounded-2xl" src={image} alt="" />
            <div className="absolute bottom-0 left-0 bg-black w-full bg-opacity-50 rounded-b-2xl">
                <button style={textStyle} onClick={handleAddToDonate} className="btn btn-primary border-none m-5">Donate ${price}</button>
            </div>
        </figure>
        <div className="my-5 w-full">
            <h1 className="font-bold text-2xl text-black">{title}</h1>
            <p className="text-black opacity-80">{description}</p>
        </div>

    </div>
    );
};
CardDetail.propTypes =  {
    cardDetails: PropTypes.object
}


export default CardDetail;



