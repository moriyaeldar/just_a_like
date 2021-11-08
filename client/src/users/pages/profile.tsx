import React from "react";
import { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};


export const Profile = () => {
const {}= useState()
const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  useEffect(() => {
     console.log(watch("example")) 
  }, []);


  
 
  return (
    <section className="profile-page">
 <form onSubmit={handleSubmit(onSubmit)}>
 <label htmlFor="user-name">User name</label>
      <input id="user-name" defaultValue="test" {...register("example")} />
      <label htmlFor="experties">Experties</label>
      <input id="experties" defaultValue="test" {...register("exampleRequired", { required: true })} />
      <label htmlFor="interests">Interests</label>
      <input id="interests" defaultValue="test" {...register("exampleRequired", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
    </section>
  );
};


