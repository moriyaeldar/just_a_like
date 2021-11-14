import { Fragment, useState } from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";

import TaskCard from "./TaskCard";
import { Headers } from "../services/cardInfo";
import classes from "../styles/taskcards.module.scss";

const TaskCards = ({ tasks }: { tasks: any }) => {
  return (
    <Fragment>
      {Headers.map((header) => (
        <div className={classes.list_tasks}>
          <header className={classes.title}>{header}</header>
          <BsThreeDotsVertical />
          <BsPlusLg />
          {tasks.map((task: any) => (
            <TaskCard task={task} />
          ))}
        </div>
      ))}
    </Fragment>
  );
};

export default TaskCards;
