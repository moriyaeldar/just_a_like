import { FC } from "react";

import NavbarTasks from "../components/NavbarTasks";
import TaskCards from "../components/TaskCards";

const TasksPage: FC = () => {
  return (
    <>
      <NavbarTasks />
      <TaskCards />
    </>
  );
};

export default TasksPage;
