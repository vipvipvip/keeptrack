import React, { FC } from 'react';
import './ProjectsPage.css';
import { MOCK_PROJECTS } from './MockProjects';

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = () => (
       <>
         <h1>Projects</h1>
        <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
       </>
    
);

export default ProjectsPage;
