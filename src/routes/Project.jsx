import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'

import { Icon } from "@iconify/react";

import Links from '../components/links/Links'

import './styles/Project.scss'

//Single project page
export default function Project({projects, links}) {

  const [project, setProject] = useState('')
  const {projectName} = useParams()
  
  console.log(project)
  
  useEffect(() => {
    setProject(projects.find(project => project.slug === projectName))
  }, [projects, projectName]);
  
  return (
    <section id="Project">
      <Links links={links}/>
      {project && (
        <>
          <h1 className="project_title">{project.title}</h1>
          <div className="project_imgbox">
            <img className='project_img' src={project.image} alt={project.title} />
          </div>
          <div className="project_links">
            <a href={project.live || ''} target="_blank" rel="noopener noreferrer" className="project_button-link">
              <Icon className="project_link-icon" icon="ant-design:eye-filled" height="24" />
            </a>
            <a href={project.github|| ''} target="_blank" rel="noopener noreferrer" className="project_button-link">
              <Icon className="project_link-icon" icon="uim:github-alt" height="24" />
            </a>
          </div>
          <div className="project_content">
            <p>{project.body}</p>
            <div className="project_skills">
              {project.tech && project.tech.map(tech => (
                <div className="skill" key={tech}>
                  <h2>{tech}</h2>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}