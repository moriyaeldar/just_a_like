import { Fragment, useState } from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";

import TaskCard from "./TaskCard";
import { Headers } from "../services/cardInfo";
import classes from "../styles/taskcards.module.scss";
import { AddTask } from "./AddTask";

const TaskCards = ({ tasks }: { tasks: any }) => {
  const [addTask, setAddTask] = useState(false);

  const addTaskHandler = () => {
    setAddTask(true);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        {Headers.map((header) => (
          <div className={classes.header}>
            <header className={classes.title}>{header}</header>

            <BsThreeDotsVertical />
            <BsPlusLg />
          </div>
        ))}
      </div>
      {tasks.map((task: any) => (
        <TaskCard task={task} />
      ))}
      {addTask ? (
        <AddTask addTask={tasks} />
      ) : (
        <div className={classes.add_task}>
          Add Task
          <BsPlusLg onClick={addTaskHandler} />
        </div>
      )}
    </Fragment>
  );
};

export default TaskCards;
