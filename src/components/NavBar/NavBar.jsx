import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black ">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-light ms-2" to={'/'}>NiloShop</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item px-2">
                        <NavLink className="nav-link text-light" to={'/category/promociones'}>Promociones</NavLink>
                    </li>
                    <li className="nav-item px-2">
                        <NavLink className="nav-link text-light" to={'/category/hogarydeco'}>Hogar&Deco</NavLink>
                    </li>
                    <li className="nav-item px-2">
                        <NavLink className="nav-link text-light" to={'/category/varios'}>Varios</NavLink>
                    </li>
                </ul>
            </div>

            <CartWidget />
        </nav>
    );
};

export default NavBar;