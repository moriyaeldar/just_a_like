import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as People } from "../../assets/svg/people.svg";
import { ReactComponent as Round} from "../../assets/svg/round.svg";
import { setPageName } from '../store/app.actions';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName('Home'))
  }, []);
  
  return (
    <div className="home-page">

      <div className="content">
        <div className="left">
        <section>
          <div></div>
          <h4>
            Tasks Due Soon
          </h4>
        </section>
       
        <section>
          <div></div>
          <h4>
             Recent Projects
          </h4>
        </section></div>
        <div className="right">
<div className="card">
  <div></div>
<h4> Next appointments</h4>
</div>
<div className="card">
  <div></div>
<h4>Recent jobs for you</h4> 
</div>

        </div>
      </div>
    </div>
  );
};
