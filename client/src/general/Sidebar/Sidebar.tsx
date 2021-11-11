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
import { ReactComponent as Calender } from "../../assets/svg/calender.svg";
import { ReactComponent as Favorites } from "../../assets/svg/favorits.svg";
import { ReactComponent as Home } from "../../assets/svg/home.svg";
import { ReactComponent as Invite } from "../../assets/svg/invite.svg";
import { ReactComponent as InviteTeam } from "../../assets/svg/inviteTeam.svg";
import { ReactComponent as Logout } from "../../assets/svg/logout.svg";
import { ReactComponent as Project } from "../../assets/svg/project.svg";
import { ReactComponent as Setting } from "../../assets/svg/setting.svg";
import { ReactComponent as Vi } from "../../assets/svg/vi.svg";
import { ReactComponent as Vi2 } from "../../assets/svg/vi2.svg";

interface SidebarProps {
  onLogoutClick: any;
}

const Sidebar: FC<SidebarProps> = (props) => {
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
            <Home className="icon"/> Home
          </button>
          </Link>
          <button>
          <Vi className="icon"/>  Boards
          </button>
          <Link to="/projects">
            <button>
              <Project className="icon"/> Projects
          </button>
          </Link>
          <button>
             <Vi2 className="icon"/> My Tasks
          </button>
          <button>
            <Calender className="icon"/> Calender
          </button>
        </div>
        <div className="favorites-container">
         <button> <Favorites className="icon"/> Favorites</button>
        </div>
      
        <div className="invite-container">
           <button><Invite className="icon"/> Invite Friends</button>
          <button><InviteTeam className="icon"/> Invite Teammates</button>         
        </div>
        <div className="setting-container">
          <button><Setting className="icon"/> Setting</button>
          <button onClick={props.onLogoutClick} ><Logout className="icon"/> Logout</button>
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
        <Link to="/">
          <button>
            <Home className="icon"/> 
          </button>
          </Link>
          <button>
          <Vi className="icon"/>  
          </button>
          <Link to="/projects">
            <button>
              <Project className="icon"/> 
          </button>
          </Link>
          <button>
             <Vi2 className="icon"/> 
          </button>
          <button>
            <Calender className="icon"/> 
          </button>
       
         <button> <Favorites className="icon"/> </button>
      
           <button><Invite className="icon"/> </button>
          <button><InviteTeam className="icon"/> </button>   
          <div className="setting-container">
          <button><Setting className="icon"/> </button>
          <button><Logout className="icon"/> </button>
          </div>
          </div>
      </div>)}
    </>
  );
};

export default Sidebar;
