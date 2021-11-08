import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import classes from "../../styles/navbartasks.module.css";

const NavbarTasks = () => {
  const [tasksPageMenu, setTasksPageMenu] = useState(false);

  const tasksPageMenuHandler = () => {
    setTasksPageMenu(!tasksPageMenu);
  };
  return (
    <nav className={classes.navbartasks}>
      <h1>My Tasks</h1>
      <IoIosArrowDown
        onClick={tasksPageMenuHandler}
        className={classes.downarrow}
      />
      {tasksPageMenu && (
        <div>
          <li className={classes.li}>Sync to calendar</li>
          <li>Add Tasks via Email</li>
          <li>Edit</li>
        </div>
      )}
      <li>List</li>
      <li>Board</li>
      <li>Calendar</li>
      <li>Files</li>
    </nav>
  );
};

export default NavbarTasks;
