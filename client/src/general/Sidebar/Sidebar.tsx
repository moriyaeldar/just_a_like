import { FC } from "react";
import { IconContext } from "react-icons";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineCheckCircle,
  AiOutlineBell,
  AiOutlineRise,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";
import { ReactComponent as Svg } from "../../assets/svg/logo.svg";
import { ReactComponent as Open } from "../../assets/svg/open-icon.svg";

const Sidebar: FC = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const onOpenMenu = () => {
    setMenu(true);
  };

  const onCloseMenu = () => {
    setMenu(false);
  };
  return (
    <>
   {isMenuOpen&& (  <div className="sidebar-container">
      

        <div className="logo-container">
            <a onClick={onCloseMenu}>
          <Open />
        </a>
          <Svg />Kulla_Like
        </div>
        <div className="buttons-container">
        <Link to="/">
          <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineHome /> Home
            </IconContext.Provider>
          </button>
          </Link>
          <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineCheckCircle /> Boards
            </IconContext.Provider>
          </button>
          <Link to="/projects">
            <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineBell /> Projects
            </IconContext.Provider>
          </button>
          </Link>
          <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineRise /> My Tasks
            </IconContext.Provider>
          </button>
          
        </div>
        <div className="favorites-container">
          <h4>Favorites</h4>
          {/* Favorite State Goes Here */}
          <button>Show more</button>
        </div>
      
        <div className="invite-container">
           <h4>Invite Friends</h4>
          <button>Invite Teammates</button>         
        </div>
        <div className="setting-container">
          <button>Setting</button>
          <button>Logout</button>
        </div>
      </div>)}
   { !isMenuOpen&&(  <div className="mini-side-bar">
       
        <div className="logo-container"> 
        <a onClick={onOpenMenu}>
          <Open />
        </a>
          <Svg />
        </div>
        <div className="buttons-container">
          <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineHome />
            </IconContext.Provider>
          </button>
          <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineCheckCircle />
            </IconContext.Provider>
          </button>
          <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineBell />
            </IconContext.Provider>
          </button>
          <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineRise />
            </IconContext.Provider>
          </button>
          <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineFileSearch />
            </IconContext.Provider>
          </button>
          <button>
            <IconContext.Provider value={{ className: "icon" }}>
              <GiConvergenceTarget />
            </IconContext.Provider>
          </button>
        </div>
      </div>)}
    </>
  );
};

export default Sidebar;
