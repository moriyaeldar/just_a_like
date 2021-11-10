import { Fragment } from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";

import TaskCard from "./TaskCard";
import { Headers } from "../services/cardInfo";
import classes from "../../styles/taskcards.module.css";

const TaskCards = ({ tasks }: { tasks: any }) => {
  console.log(tasks);

  return (
    <Fragment>
      {Headers.map((header) => (
        <div className="column">
          <header className={classes.title}>{header}</header>
          <BsThreeDotsVertical />
          <BsPlusLg />
          {tasks.map((task: any) => (
            <TaskCard task={task} />
          ))}

          <section style={{ textAlign: "center" }}>
            <BsPlusLg /> Add task
          </section>
        </div>
      ))}
    </Fragment>
  );
};

export default TaskCards;
