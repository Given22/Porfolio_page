import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'


//Single project page
export default function Project({projects}) {

  const [project, setProject] = useState('')
  const {projectName} = useParams()
  
  console.log(projects)
  
  useEffect(() => {
    setProject(projects.find(project => project.slug.current === projectName))
  }, [projects, projectName]);
  
  return <h2>{JSON.stringify(project)}</h2>;
}