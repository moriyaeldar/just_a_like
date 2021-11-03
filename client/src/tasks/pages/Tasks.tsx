import { FC } from "react";

import NavbarTasks from "../components/NavbarTasks";
import TaskCard from "../components/TaskCard";

const TasksPage: FC = () => {
  return (
    <>
      <NavbarTasks />
      <TaskCard />
    </>
  );
};

export default TasksPage;
