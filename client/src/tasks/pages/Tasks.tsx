import { FC } from "react";

import NavbarTasks from "../components/NavbarTasks";
import TaskCard from "../components/TaskCard";

const TasksPage: FC = () => {
  return (
    <>
      <h1>Tasks page</h1>
      <NavbarTasks />
      <TaskCard />
    </>
  );
};

export default TasksPage;
