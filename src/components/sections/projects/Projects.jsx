/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";

import { Icon } from '@iconify/react';


import './projects.scss'

export default function Projects({projects}){
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndexes, setVisibleIndexes] = useState([whichIndex(activeIndex - 1), activeIndex, whichIndex(activeIndex + 1)]);
  
  function whichIndex(index){
    if(index === projects.length){
      index = 0
    } else if (index < 0){
      index = projects.length - 1
    }
    return index
  }
  
  useEffect(() => {
    setVisibleIndexes([whichIndex(activeIndex - 1), activeIndex, whichIndex(activeIndex + 1)])
  }, [projects, activeIndex]);
  
  const PrevIndex = () => {
    setActiveIndex(prev => {
      return whichIndex(prev - 1)
    })
  }
  
  const NextIndex = () => {
    setActiveIndex(prev => {
      return whichIndex(prev + 1)
    })
  }
  
  useEffect(() => {
    console.log(activeIndex, visibleIndexes)
  }, [activeIndex, visibleIndexes])
  
  return (
    <>
      <div id='Projects'>
        <div id='Projects_Slider'>
          <Icon className='slider_arrow arrow_left' icon="ep:arrow-left-bold" color="black" height="50" onClick={PrevIndex}/>
          {
            (visibleIndexes.map((Index) => {
              return (
                projects[Index] &&
                <img key={Index}className={`projects_img ${Index !== activeIndex ? 'active_img' : ''}`} src={projects[Index].mainImage !== null ? projects[Index].mainImage.asset.url : 'https://images.unsplash.com/photo-1656682938727-b1ff06e48f63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} alt={projects[Index].slug.current}/>
              )
            }))
          }
          <Icon className='slider_arrow arrow_right' icon="ep:arrow-right-bold" color="black" height="50" onClick={NextIndex}/>
          
        </div>
        <div className="projects_links">
        </div>
      </div>
    </>
  )
}