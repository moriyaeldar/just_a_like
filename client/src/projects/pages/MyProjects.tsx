import { Link } from 'react-router-dom'; 
import '../styles/MyProject.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPageName } from '../../general/store/app.actions';
import { loadproject } from '../store/project.actions';

const MyProjects = () => {
    const dispatch = useDispatch();
    const { user, loading, token } = useSelector(
        (state: any) => state.userModule
      );
    const { project } = useSelector((state: any) => state.projectModule);


    useEffect(() =>{
        dispatch(setPageName('My Projects'));
        dispatch(loadproject("619139b4147f6011efde67df"))
    }, [])

    return (
        <>
        <div className="card-container">
            <div className="card-title">
                <h3>{project.name}</h3>
            </div>
                <div className="card-content">
                    <div className="description">
                        <h5>{project.description}</h5>
                    </div>
            </div>
                <div className="btn">
                    <Link to={`/myprojects/619139b4147f6011efde67df`}>
                    <button>
                        <a>
                            View more
                        </a>
                    </button>
                    </Link>
                </div>
        </div>
        </>
    )
};

export default MyProjects;


