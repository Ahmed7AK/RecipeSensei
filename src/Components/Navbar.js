import ninja from "../Images/ninja.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div id="navbar">
            <Link className="link" id="icon-title" to={"/"}>
                <img src={ninja} alt="ninja icon"/>
                <h1>Recipe Sensei</h1>
            </Link>
            <ul id="nav-options">
                <li>
                    <Link className="link" to={"/recipes"}>All Recipes</Link>
                </li>
                <li>
                    <Link className="link" to={"/random"}>Random</Link>
                </li>
                <li>
                    <Link className="link" to={"/saved"}>Saved</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;