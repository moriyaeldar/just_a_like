import { FC } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Defult } from "../../assets/svg/avatars/defult.svg";
import { Profile } from "../../users/pages/profile";

const Header = () => {
  const [isModalOpen, setModal] = useState(false);

  const handleModal = () => {
    setModal(!isModalOpen);
  };

  return (
    <section className="header">
      {!isModalOpen && (
        <a onClick={handleModal}>
          <Defult className="user-icon"/>
        </a>
      )}
      {isModalOpen && (
        <div className="user-modal">
          <a onClick={handleModal}>close</a>

          <Profile />
        </div>
      )}
    </section>
  );
};
export default Header;