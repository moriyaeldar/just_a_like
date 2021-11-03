import Task from "../../tasks/components/TaskCard";

const Project = () => {
  return (
    <div className="project-container">
      <h1>Project Page</h1>
      <div className="todo-container">
        <h4>To Do</h4>
        <Task />
        <Task />
      </div>
      <div className="in-progress-container">
        <h4>In Progress</h4>
        <Task />
        <Task />
      </div>
      <div className="completed-container">
        <h4>Completed</h4>
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Project;
