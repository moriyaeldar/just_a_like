import { Link } from 'react-router-dom'; 
import '../styles/MyProject.scss';
// import '../styles/ProjectView.scss'

const MyProjects = () => {

    return (
        <>
            <div>
                <h1>My Projects</h1>
            </div>
        <div className="card-container">
            <div className="card-title">
                <h3>project.name</h3>
            </div>
                <div className="card-content">
                    <div className="description">
                        <h5>project.description</h5>
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


