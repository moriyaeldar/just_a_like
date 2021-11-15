import { Link } from 'react-router-dom';
import { useEffect } from "react";

import { useDispatch } from 'react-redux';
import { setPageName } from '../../general/store/app.actions';


const MyProjects = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(setPageName('My Projects'));
    }, [])

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