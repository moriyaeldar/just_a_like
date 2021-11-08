import { FC } from "react";
import { IconContext } from "react-icons";
import {
  AiOutlineHome,
  AiOutlineCheckCircle,
  AiOutlineBell,
  AiOutlineRise,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { GiConvergenceTarget } from "react-icons/gi";
import { ReactComponent as Svg } from '../../assets/svg/logo.svg';

const Sidebar: FC = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
<Svg/>
  </div>
      <div className="buttons-container">
        <button>
          <IconContext.Provider value={{ className: "icon" }}>
            <AiOutlineHome /> Home
          </IconContext.Provider>
        </button>
        <button>
          <IconContext.Provider value={{ className: "icon" }}>
            <AiOutlineCheckCircle /> My Tasks
          </IconContext.Provider>
        </button>
        <button>
          <IconContext.Provider value={{ className: "icon" }}>
            <AiOutlineBell /> Inbox
          </IconContext.Provider>
        </button>
        <button>
          <IconContext.Provider value={{ className: "icon" }}>
            <AiOutlineRise /> Reporting
          </IconContext.Provider>
        </button>
        <button>
          <IconContext.Provider value={{ className: "icon" }}>
            <AiOutlineFileSearch /> Portfolios
          </IconContext.Provider>
        </button>
        <button>
          <IconContext.Provider value={{ className: "icon" }}>
            <GiConvergenceTarget /> Goals
          </IconContext.Provider>
        </button>
      </div>
      <div className="favorites-container">
        <h4>Favorites</h4>
        {/* Favorite State Goes Here */}
        <button>Show more</button>
      </div>
      <div className="saved-searches-container">
        <h4>Saved Searches</h4>
        <button>Tasks I've created</button>
        <button>Tasks I've assigned to others</button>
        <button>Recently completed tasks</button>
        <button>Messages I've sent</button>
        <button>Messeages I've received</button>
      </div>
      <div className="design-container">
        <h4>Design</h4>
      </div>
      <div className="invite-container">
        <button>Invite Teammates</button>
      </div>
      <div className="getting-started-container">
        <button>Help & Getting Started</button>
      </div>
    </div>
  );
};

export default Sidebar;
