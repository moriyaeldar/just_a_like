import {MDCRipple} from '@material/ripple';
import '../styles/ProjectView.scss'

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

export const ProjectView = ({project} : {project: any}) => {
    
    return (
        <>
        <div className="card-container">
            <div className="card-title">
                <h3>{project.name}</h3>
            </div>
                <div className="card-content">
                    <div className="card-subtitle">
                        <p>{project.projectManager}</p>
                    </div>
                    <div className="description">
                        <h5>{project.description}</h5>
                    </div>
            </div>
                <div className="btn">
                    <button>
                        <a>
                            View more
                        </a>
                    </button>
                </div>
        </div>
        </>
    )
}