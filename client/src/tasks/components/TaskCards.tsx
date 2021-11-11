import { Fragment, useState } from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";

import { AddTask } from "./AddTask";

import TaskCard from "./TaskCard";
import { Headers } from "../services/cardInfo";
import classes from "../styles/taskcards.module.scss";

const TaskCards = ({ tasks }: { tasks: any }) => {
  const [newTask, setNewTask] = useState(false);

  const newTaskHandler = () => {
    setNewTask(!newTask);
  };

  const removeNewTaskHandler = () => {
    setNewTask(false);
  };

  return (
    <Fragment>
      {Headers.map((header) => (
        <div className="column">
          <header onClick={removeNewTaskHandler} className={classes.title}>
            {header}
          </header>
          <BsThreeDotsVertical />
          <BsPlusLg />
          {tasks.map((task: any) => (
            <TaskCard task={task} />
          ))}
          {newTask ? (
            <AddTask />
          ) : (
            <section onClick={newTaskHandler} style={{ textAlign: "center" }}>
              <BsPlusLg /> Add task
            </section>
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default TaskCards;
