import { FC } from 'react';
import { ProjectView } from './ProjectView';
import { useState } from 'react';
import "../styles/ListProjects.scss";
import SearchBox from "./searchbox";


const ListProjects = ({projects} : {projects: Array<any>}) => {
    const [view, setView] =  useState("card");
    // const transfer = {card:"list", list: "card"};
  const [searchQuery, setSearchQuery] = useState("");
    
    const handleSearch = (query: any) => {
        setSearchQuery(query);
    };

    const handleViewClick = () => {
        if(view==="card") 
            setView("list");
        else 
            setView("card");
    };
    
    let filtered  = projects;
    
    if (searchQuery)

    filtered = projects.filter(p =>
      (p.name.toLowerCase().startsWith(searchQuery.toLowerCase())) ||
      (p.name.toLowerCase().startsWith(searchQuery.toLowerCase()))
    );

    return (
        <>
        {/* <button className="btn" onClick={handleViewClick}>Change view</button> */}
        <SearchBox value={searchQuery} onChange={handleSearch} />
        <div className="list-projects">
            {filtered && filtered.map((project: any) => <ProjectView key={project._id} project={project}/>)} 
        </div>
        </>
    );
}

export default ListProjects;