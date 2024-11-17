import { NavLink } from "react-router-dom";
import logo from "../../assets/tdr-logo.png";
const NavBarJSX = () => {

  const NavLinkState = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  }

  return (
    <nav className="text-xl md:text-2xl sticky top-0">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="#">
            <img src={logo} alt="Logo" className="h-[64px]" />
          </a>
          <div className="sayer-full pr-2 shrink-0 invisible md:visible">SAYER FULL</div>
        </div>
      
        <div className="flex grow justify-between md:justify-end space-x-8 mx-6">
          <NavLink to="graphics" style={NavLinkState}>
          Graphics
          </NavLink>
          <NavLink to="insights" style={NavLinkState}>
            Insights
          </NavLink>
          <NavLink to="/" style={NavLinkState}>
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarJSX;
