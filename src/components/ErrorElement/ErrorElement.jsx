import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>
            <h2>Oppppps!!!!!</h2>
            <Link to='/'>Go back</Link>
        </div>
    );
};

export default ErrorElement;