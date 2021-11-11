import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { details } from "../services/cardInfo";

import classes from "../styles/taskcard.module.scss";
import TaskMenu from "./TaskMenu";

const TaskCard = ({ task }: { task: any }) => {
  const [taskMenu, setTaskMenu] = useState(false);

  const menuTaskHandler = () => {
    setTaskMenu(!taskMenu);
  };

  return (
    <div>
      <div className={classes.task}>
        <h3>
          {task.name} <BsThreeDotsVertical onClick={menuTaskHandler} />
        </h3>
        {taskMenu && <TaskMenu />}
        <label>{task.description}</label>
      </div>
    </div>
  );
};

export default TaskCard;
