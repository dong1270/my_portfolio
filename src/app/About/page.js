import '@/app/About/about.css'
import jsonData from '@/app/data.json';

export default function About() {
    //text data
    const imgPath = jsonData.main;
    const aboutText = jsonData.about.comment;
    const education = jsonData.about.education;
    const eDate = education.date;
    const eArray = Object.values(eDate);
    const eDegree = Object.values(education.degree);

    // skill data
    const skill = jsonData.about.skill;
    const frontEnd = skill.frontend;
    const backEnd = skill.backend;
    const library = skill.library;
    const database = skill.db;

    return (
      <div className="about-main-view">
        <div>
            <div className="img-view">
                <img src={imgPath.mainImg}></img>
            </div>
            <div className="about-text-view">
                <div className="about-contents-view">
                    <div className="about-contents">
                        <div className="about">
                            <span>ABOUT</span>
                            <div className='text'>
                                    {aboutText}
                            </div>
                        </div>
                        <div className="about">
                            <span>EDUCATION</span>
                            <div className='text'>
                                    <ul className='list-style'>
                                        {
                                            eArray.map((log, i) => {
                                                const mykey = "eKey" + i;
                                                return (
                                                        <li key={mykey}>
                                                            {log}
                                                            &nbsp;&nbsp;
                                                            {eDegree[i]}
                                                        </li>
                                                    )
                                            })
                                        }
                                    </ul> 
                            </div>
                        </div>
                        <div className="about">
                            <span>SKILL </span>
                            <div className='text'>
                                <div className='head-line'>
                                    - FRONTEND
                                </div>
                                <div className='img-grid'>
                                    {
                                        frontEnd.map((imageName, index) => {
                                            return (
                                                <div className='img-box' key={index}>
                                                    <img src={imageName} key={index}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='text'>
                                <div className='head-line'>
                                    - BACKEND
                                </div>
                                <div className='img-grid'>
                                    {
                                        backEnd.map((imageName, index) => {
                                            return (
                                                <div className='img-box' key={index}>
                                                    <img src={imageName} key={index}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='text'>
                                <div className='head-line'>
                                    - LIBRARY
                                </div>
                                <div className='img-grid'>
                                    {
                                        library.map((imageName, index) => {
                                            return (
                                                <div className='img-box' key={index}>
                                                    <img src={imageName} key={index}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='text'>
                                <div className='head-line'>
                                    - DATABASE
                                </div>
                                <div className='img-grid'>
                                    {
                                        database.map((imageName, index) => {
                                            return (
                                                <div className='img-box' key={index}>
                                                    <img src={imageName} key={index}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {/* <div className='project-footer'>
                                    &nbsp;
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  