import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { details } from "../services/cardInfo";

import classes from "../../styles/taskcard.module.css";
import TaskMenu from "./TaskMenu";
import { AddTask } from "./AddTask";

const TaskCard = ({ task }: { task: any }) => {
  const [taskMenu, setTaskMenu] = useState(false);

  const MenutaskHandler = () => {
    setTaskMenu(!taskMenu);
  };

  return (
    <div>
      {details.map((detail) => (
        <div className={classes.task}>
          <h3>
            {task.name} <BsThreeDotsVertical onClick={MenutaskHandler} />
          </h3>
          {taskMenu && <TaskMenu />}
          <label>{task.description}</label>
        </div>
      ))}
      <AddTask />
    </div>
  );
};

export default TaskCard;
