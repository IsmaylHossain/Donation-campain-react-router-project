import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-6 shadow-md px-6">
            <div className="w-40">
               <Link to="/"> <img src="/Resources/Logo.png" alt="" /></Link>
            </div>
            <div>
                    <ul  className="flex justify-between gap-5">
                        <li>
                        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
  }
>
  Home
</NavLink>
                        </li>
                        <li>
                        <NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
  }
>
  Donation
</NavLink>
                        </li>
                        <li>
                        <NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
  }
>
  Statistics
</NavLink>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Navbar;