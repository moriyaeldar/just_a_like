import { MdOutlineArrowForwardIos } from "react-icons/md";
import { remove } from "../services/task.service";


const TaskMenu = ({ task }: { task: any }) => {
  const removeHandler = (id: any) => {
    remove(id);
  };

  return (
    <div className="container">
      <ul className="ul">
        <li>Edit Task Name</li>
        <li>Duplicate task</li>
        <li style={{ color: "red" }}>
          <button onClick={() => removeHandler(task._id)}>Delete task</button>
        </li>
      </ul>
    </div>
  );
};

export default TaskMenu;
