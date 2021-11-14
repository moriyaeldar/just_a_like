import { useState } from "react";
import { BsThreeDotsVertical, BsPlusLg } from "react-icons/bs";

import classes from "../styles/taskcard.module.scss";
import TaskMenu from "./TaskMenu";

const TaskCard = ({ task }: { task: any }) => {
  const [taskMenu, setTaskMenu] = useState(null);

  const menuTaskHandler = () => {
    setTaskMenu(!taskMenu);
    console.log(task._id);
  };

  return (
    <>
      <div className={classes.task_card}>
        <div className={classes.task_container}>
          <div className={classes.header}>
            <h3 className={classes.card_title}>{task.name}</h3>
            <BsThreeDotsVertical onClick={menuTaskHandler} />
          </div>
          <label className={classes.card_content}>{task.description}</label>
        </div>
        {taskMenu && <TaskMenu task={task} />}
      </div>
    </>
  );
};

export default TaskCard;
