

// const Donation = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Donation;
 

import { useEffect, useState } from "react";
import DonationContainer from "./DonationContainer";



const Donation = () => {

    const [donate, setDonate] = useState([]);

    const[noFound, setNoFound] = useState(false)

    const[isShow, setIsShow] = useState(false)

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem("donate"));
        if(donateItems){
            setDonate(donateItems)
        }
        else{
            setNoFound("NO Data Found")
        }
    },[]);
    console.log(donate);

    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>: <div className="grid lg:grid-cols-2 gap-10 py-6">

                    {
                   isShow ?  donate.map(donates => <DonationContainer key={donates.id} card={donates}></DonationContainer> ):

                   donate.slice(0,4).map(donates => <DonationContainer key={donates.id} card={donates}></DonationContainer> )
                    }

                </div>}
            {donate.length > 4 && <button onClick={() => setIsShow(!isShow)} className="h-12 px-5 bg-green-200 block mx-auto rounded-xl">{isShow ? "See Less": "See More"}</button>}
        </div>
    );
};

export default Donation;