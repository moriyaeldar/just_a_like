import { Link } from 'react-router-dom'; 

const MyProjects = () => {
    return (
        <>
            <div>
                <h1>My Projects</h1>
                <Link to="/myprojects/619139b4147f6011efde67df">
                    <button>go to specific</button>
                </Link>
            </div>
        </>
    )
};

export default MyProjects;