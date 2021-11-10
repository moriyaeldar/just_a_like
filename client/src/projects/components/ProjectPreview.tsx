

export const ProjectPreview = ({project} : {project: any}) => {
    
    return (
        <>
            <p>Name: {project.name}</p>
            <p>Project manager: {project.projectManager}</p>
            <p>Status: {project.status}</p>
            <p>Tasks: {project.tasks}</p>
            <p>Team: {project.team}</p>
        </>
    )
}