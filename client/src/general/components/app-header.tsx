import { FC } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Defult } from "../../assets/svg/avatars/defult.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svg/notification-icon.svg";
import { Profile } from "../../users/pages/profile";
import { TextField } from '@mui/material';

interface Props{
  handleModal: any;
  isModalOpen: boolean;
  page: string;
}

const Header:FC<Props> = (props) => {
  return (
    <>
    <section className="header">
      <h1>{props.page}</h1>
      <div className="options-side">
        <div className="search-input">
          <TextField
          type="text" 
          placeholder="Search"/>
        </div>
        <div>
          <NotificationIcon/>
        </div>
          <div>
            <a onClick={props.handleModal}>
              <Defult className="user-icon"/>
            </a>
          </div>
      </div>
    </section>
        {props.isModalOpen && (
          <div className="user-modal">
            <a onClick={props.handleModal}>close</a>
            <Profile />
          </div>
        )}
      </>
  );
};
export default Header;