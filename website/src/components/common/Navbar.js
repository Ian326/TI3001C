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
    <nav className="fixed top-0 w-full text-xl md:text-2xl">
      
      <div className="flex flex-wrap justify-center items-center">
        
        <div className="flex items-center space-x-8">
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="focus:outline-none"
          >
            <img className="h-[64px]" src={logo} alt="TDR_logo" />
          </button>
          
          <div className="sayer-full hidden md:visible md:inline-block shrink-0 pr-2">
            SAYER FULL
          </div>
        
        </div>
      
        <div className="flex grow justify-between sm:justify-end space-x-8 mx-6">
          
          <NavLink to="graphics" style={NavLinkState}>
            Gráficos
          </NavLink>
          
          <NavLink to="insights" style={NavLinkState}>
            Hallazgos
          </NavLink>
          
          <NavLink to="/" style={NavLinkState}>
            Inicio
          </NavLink>
        
        </div>
      
      </div>
    
    </nav>
  );
};

export default NavBarJSX;
