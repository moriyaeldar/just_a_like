import { useState }from 'react';
import { useDispatch } from "react-redux";
import { createProject } from '../store/project.actions';
import { getAllUsers } from '../../users/services/user.service';

const NewProject = () => {

    const [project, setProject] = useState({name: "", description:"", projectManager:"", status:"", tasks:[""], participants:[""]});
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);

    const handleSubmit = () => {
        dispatch(createProject(project));
    };

    const handleChangeName = (event: any) => {
      }

      const handleUsers = async () => {
        const users = await getAllUsers();
        // setUsers(users);
        console.log(users);
      }
    
    return (
        <>
            <form>
                <form>
                    <label>Name:            </label>
                    <input type="text" name="name" value={project.name}/>
                </form>
                <form>
                    <label>Description:     </label>
                    <input type="text" name="description" value={project.description}/>
                </form>
                <form>
                    <label>projectManager:  </label>
                    <input type="text" name="name" value={project.projectManager}/>
                </form>
                <form>
                    <label>status:          </label>
                    <input type="text" name="name" value={project.status}/>
                </form>
                <form>
                    <label>tasks:           </label>
                    <input type="text" name="name" value={project.tasks}/>
                </form>
                <form>
                    <label>participants:    </label>
                    <input type="text" name="name" value={project.participants}/>
                </form>
                {/* <button onClick={handleUsers}></button> */}
            </form>
        </>
    )
}

export default NewProject;