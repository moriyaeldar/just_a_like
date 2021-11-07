import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";

import { details } from "../services/cardInfo";
import { Headers } from "../services/cardInfo";

const TaskCard = () => {
  return (
    <div className="container">
      {Headers.map((header) => (
        <>
          <h2>{header.name}</h2>
          <BsPlusLg />
          <BsThreeDotsVertical />
        </>
      ))}
      {details.map((detail) => (
        <>
          <h3>{detail.taskName}</h3>
          <label>{detail.taskPiority}</label>
        </>
      ))}
    </div>
  );
};

export default TaskCard;
