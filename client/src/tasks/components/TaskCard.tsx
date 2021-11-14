import { useState } from "react";
import { BsThreeDotsVertical, BsPlusLg } from "react-icons/bs";

import classes from "../styles/taskcard.module.scss";
import TaskMenu from "./TaskMenu";

const TaskCard = ({ task }: { task: any }) => {
  const [taskMenu, setTaskMenu] = useState(false);

  const menuTaskHandler = () => {
    setTaskMenu(!taskMenu);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={classes.task_container}>
        <h3 className={classes.card_title}>
          {task.name} <BsThreeDotsVertical onClick={menuTaskHandler} />
        </h3>

        {taskMenu && <TaskMenu />}
        <label className={classes.card_content}>{task.description}</label>
      </div>
    </div>
  );
};

export default TaskCard;
