import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "primereact/button";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar p-3 bg-gray-100 flex justify-between items-center shadow-md">
            <div className="flex gap-4">
                <Link to="/">Inicio</Link>

                {user && (
                    <>
                        <Link to="/productos">Productos</Link>
                        <Link to="/usuarios">Usuarios</Link>
                        {user.rol === "admin" && <Link to="/usuarios">Panel Admin</Link>}
                    </>
                )}
            </div>

            <div className="flex gap-4">
                {!user ? (
                    <>
                        <Link to="/inicio-sesion">Login</Link>
                        <Link to="/registro">Registro</Link>
                    </>
                ) : (
                    <Button label="Logout" className="p-button-sm p-button-danger" onClick={logout} />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
