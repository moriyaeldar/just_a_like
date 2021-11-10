import React from "react";
import { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { ReactComponent as DefultB} from "../../assets/svg/avatars/defult-blank.svg";
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(() => {
    console.log(watch("example"));
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
              <Defult/>
              <option value="defult"></option>
            </select>
            {isOptionsOpen&&(<div className="options">
              <DefultB/> <E/> <F/> <H/>
               <I/> <J/> <A/> <B/> <C/> <D/> <G/>

            </div>)}
            <label htmlFor="user-name">Your full name</label>
            <input
              id="user-name"
              defaultValue="test"
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
