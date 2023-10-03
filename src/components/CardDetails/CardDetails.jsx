import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "./CardDetail";




const CardDetails = () => {

   

    const [cardDetails, setCardDetails] = useState({});

    const {id} = useParams();

    const cardDetail = useLoaderData();

   useEffect(()=> {
        const findCard = cardDetail?.find((cardDetails)=>cardDetails.id== id)
     

        setCardDetails(findCard)
   }, [id,cardDetail])

   console.log(cardDetails);

    return (
        <div>
           <CardDetail cardDetails={cardDetails}></CardDetail>
        </div>
    );
};


export default CardDetails;