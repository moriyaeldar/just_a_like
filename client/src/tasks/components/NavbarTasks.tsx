import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import classes from "../../styles/navbartasks.module.css";

const NavbarTasks = () => {
  const [arrow, setArrow] = useState(false);

  const dropDown = () => {
    setArrow(!arrow);
  };
  return (
    <nav className={classes.navbartasks}>
      <h1>My Tasks</h1>
      <IoIosArrowDown onClick={dropDown} className={classes.downarrow} />
      {arrow && (
        <ul className={classes.ul}>
          <li className={classes.li}>Edit Project Details</li>
          <li>Edit</li>
          <li>Edit</li>
        </ul>
      )}
      <ul>
        <p className={classes.list}>List</p>
        <p>Board</p>
        <p>Calendar</p>
      </ul>
    </nav>
  );
};

export default NavbarTasks;
