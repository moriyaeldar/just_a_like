import React from "react";
import { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import {  useSelector } from 'react-redux';
import { ReactComponent as DefultB} from "../../assets/svg/avatars/0.svg";
import { ReactComponent as Defult} from "../../assets/svg/avatars/defult.svg";
import { ReactComponent as A} from "../../assets/svg/avatars/1.svg";
import { ReactComponent as B} from "../../assets/svg/avatars/2.svg";
import { ReactComponent as C} from "../../assets/svg/avatars/3.svg";
import { ReactComponent as D} from "../../assets/svg/avatars/4.svg";
import { ReactComponent as E} from "../../assets/svg/avatars/5.svg";
import { ReactComponent as F} from "../../assets/svg/avatars/6.svg";
import { ReactComponent as G} from "../../assets/svg/avatars/7.svg";
import { ReactComponent as H} from "../../assets/svg/avatars/8.svg";
import { ReactComponent as I} from "../../assets/svg/avatars/9.svg";
import { ReactComponent as J} from "../../assets/svg/avatars/10.svg";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const Profile = () => {
  const [isOptionsOpen, setOptions] = useState(false);
  const { user } = useSelector((state: any)=>state.userModule);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(() => {
    console.log(watch("example"));
    console.log(user);
    
  }, []);
 const onOpenOptions=()=>{
  isOptionsOpen?setOptions(false):setOptions(true);

  }
  return (
    <section className="profile-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Profile</h1>
        <div className="form-body">
          <div className="left">
            <label htmlFor="user-avatar">Your avatar</label>
            <select
              className="avatar-input"
              name="user-avatar"
              id="user-avatar"
              onClick={onOpenOptions}
            >
              <option value="defult">-</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {isOptionsOpen&&(<div className="options">
              0<DefultB/>1<A/>
              2<B/>3<C/>4<D/>
              5<E/>6<F/>7<G/>8<H/>9<I/>10<J/> 
            </div>)}
            <label htmlFor="user-name">Your user name</label>
            <input
              id="user-name"
              defaultValue={user.username}
              {...register("example")}
            />
          </div>
          <div className="right">
            <label htmlFor="experties">Experties</label>
            <input
              id="experties"
              defaultValue="test"
              {...register("exampleRequired", { required: true })}
            />
            <label htmlFor="interests">Interests</label>
            <input
              id="interests"
              defaultValue="test"
              {...register("exampleRequired", { required: true })}
            />
          </div>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <input className="submit" type="submit" />
      </form>
    </section>
  );
};
