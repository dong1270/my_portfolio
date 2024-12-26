'use client'

import '@/app/Project/project.css'
import MyModal from './modal.js'
import { useState } from 'react';
import jsonData from '@/app/data.json';

export default function Project() {
    const [modalSwith, setModalSwith] = useState(false);
    const [myContent, setMyContent] = useState({});
    const projectData = jsonData.project;
  
    return (
        <div>
            <div className="main-view">
                <div>
                    <div className="project-text-view">
                        <div className="project-contents-view">
                            <div className="project-contents">
                                <div className="project">
                                    <span>MY PROJECT </span>
                                    <div className='pj-img-grid'>
                                        {
                                            projectData.map((content, index) => {
                                                return (
                                                    <div className='pj-grid-item' key={index} onClick={() => {
                                                        setModalSwith(true);
                                                        setMyContent(content);
                                                    }}>
                                                        <img className='pj-img-box' src={content.imgPath}/>
                                                        <h3 className='project-title'>{content.projectTitle}</h3>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                modalSwith ? <MyModal setModalSwith={setModalSwith} content={myContent}/> :null
            }
        </div>
    );
  }
  