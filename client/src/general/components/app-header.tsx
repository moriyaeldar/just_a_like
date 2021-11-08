import { Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg";
import { Profile } from "../../users/pages/profile";

export const Header = () => {
  const [isModalOpen, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
  };
  return (
    <section className="header">
     {!isModalOpen&&( <a onClick={openModal}>
        <UserIcon />
      </a>)}
      {isModalOpen && (
        <div className="user-modal">
          <Profile />
          <a onClick={onCloseModal}>close</a>
        </div>
      )}
    </section>
  );
};
