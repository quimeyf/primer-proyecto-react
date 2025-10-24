import { Link } from "react-router-dom";

export const Nav = () => {
    return (
    <nav>
        <ul>
            <li>
                 <Link to={"/"}>Home</Link>
            </li>
             <li>
                 <Link to={"/category/dulce"}>Dulce</Link>
            </li>
             <li>
                 <Link to={"/category/salado"}>Salado</Link>
            </li>
        </ul>
    </nav>
    );
};