import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadproject } from './../store/project.actions';
import { setPageName } from '../../general/store/app.actions';
import '../styles/ProjectDetails.scss';
import NewProject from "../components/NewProject";

const ProjectDetails = () => {
    const dispatch = useDispatch();
    const { project } = useSelector((state: any) => state.projectModule);
    const {id}: {id: any} = useParams();

    
    useEffect(() => {
        dispatch(setPageName('Projects/some project name'))
    },[]);

    useEffect(() => {
        try{
            if(id === "new") return;
            dispatch(loadproject(id));
        }catch(ex) {
            //Throw new Error("Project not found", 404)
        }
        // dispatch() --to catch the product manager
    },[]);

    if(id==="new") return <NewProject/>;

    return(
        <>
        <div className="card-title">
            <div className="name">
                <h3>{project.name}</h3>
            </div>
            <div className="description">
                    <h5>{project.description}</h5>
            </div>
        </div>
            <div className="card-container">
                <div className="card-content">
                    <div className="product-manager">
                        <h5>project.productManager</h5>
                    </div>
                </div>
                <div className="card-content">
                    <div className="participants">
                        <h5>project.participants</h5>
                    </div>
                </div>

        </div>
        </>
    )
}

export default ProjectDetails;