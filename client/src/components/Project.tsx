import '../styles/project.css';
import Task from './Task'

const Project = () => {
    return (
        <div className="project-container">
            <div className="todo-container">
                <h4>To Do</h4>
                <Task />
                <Task />
            </div>
            <div className="in-progress-container">
                <h4>In Progress</h4>
                <Task />
                <Task />
            </div>
            <div className="completed-container">
                <h4>Completed</h4>
                <Task />
                <Task />
            </div>
        </div>
    )
}

export default Project
