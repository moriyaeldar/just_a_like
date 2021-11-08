import { MdOutlineArrowForwardIos } from "react-icons/md";

const TaskMenu = () => {
  return (
    <ul>
      <li>Edit Task Name</li>
      <li>
        Add Cover Image
        <MdOutlineArrowForwardIos
          style={{ fontSize: "15", marginLeft: "50" }}
        />
      </li>
      <hr />
      <li>More details</li>
      <li>Open in new tab</li>
      <li>Duplicate task</li>
      <li>Copy task link</li>
      <li>Create follow-up task</li>
      <hr />
      <li>Mark as Milestone</li>
      <li>Unmark as Approval</li>
      <hr />
      <li style={{ color: "red" }}>Delete task</li>
    </ul>
  );
};

export default TaskMenu;
