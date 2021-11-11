import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadproject } from './../store/project.actions';

const ProjectDetails = () => {
    const dispatch = useDispatch();
    const { project } = useSelector((state: any) => state.projectModule);
    const {id}: {id: any} = useParams();

    useEffect(() => {
        dispatch(loadproject(id));
        // dispatch() --to catch the product manager
    },[]);

    return(
        <>
            <div className="card-container">
            <div className="card-title">
                <h3>{project.name}</h3>
            </div>
                <div className="card-content">
                    <div className="description">
                        <h5>project.description</h5>
                    </div>
                </div>
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