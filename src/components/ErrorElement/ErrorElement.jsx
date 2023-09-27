
import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="flex justify-center items-center">
            <h2>Oppppps!!!!!</h2>
            <Link to='/'><button className=" btn btn-primary">Go back</button></Link>
        </div>
    );
};

export default ErrorElement;