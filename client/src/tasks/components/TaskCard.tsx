import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { details } from "../services/cardInfo";

import classes from "../../styles/taskcard.module.css";
import TaskMenu from "./TaskMenu";

const TaskCard = () => {
  const [taskMenu, setTaskMenu] = useState(false);

  const MenutaskHandler = () => {
    setTaskMenu(!taskMenu);
  };

  return (
    <div>
      {details.map((detail) => (
        <div className={classes.task}>
          <h3>
            {detail.taskName} <BsThreeDotsVertical onClick={MenutaskHandler} />
          </h3>
          {taskMenu && <TaskMenu />}
          <label>{detail.taskPiority}</label>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
