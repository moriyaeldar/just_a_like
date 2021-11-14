// import {MDCRipple} from '@material/ripple';
import '../styles/ProjectView.scss'
import { Link } from "react-router-dom"
// const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
// const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
//   return new MDCRipple(el);
// });

export const ProjectView = ({project} : {project: any}, {view} : {view:string}) => {    
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
                    <Link to={`/projects/${project._id}`}>
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
}