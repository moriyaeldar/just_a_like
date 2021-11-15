import classes from "../styles/navbartasks.module.scss";

const NavbarTasks = () => {
  return (
    <nav className={classes.container}>
      <div className={classes.header}>
        <h1>My Tasks</h1>
      </div>
      <div className={classes.head_menu}>
        <li>List</li>
        <li>Board</li>
        <li>Calendar</li>
        <li>Files</li>
      </div>
    </nav>
  );
};

export default NavbarTasks;
