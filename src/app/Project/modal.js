import '@/app/Project/modal.css'

export default function MyModal(props) {
    const content = props.content;
    const imgPath = content.imgPath;
    const projectTitle = content.projectTitle;
    const discription = content.discription;
    const usingSkill = content.usingSkill;
    const srcLink = content.sourceLink;

    return (
        <div>
            <div className="modal-back"/>
            <div className="modal-view">
                <div className="modal-frame">
                    <div className="close-box" onClick={()=> {
                        props.setModalSwith(false);
                    }}>
                        <svg stroke='currentColor' fill='currentColor' strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                            <path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path>
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                        </svg>
                    </div>
                    <div className='image'>
                        <img src={imgPath}></img>
                    </div>
                    <div className='modal-text'>
                        <div>
                            <h3>{projectTitle}</h3>
                        </div>
                        <div>
                            <h5 className='sub-title'>
                                <b>
                                    <svg stroke='currentColor' fill='currentColor' strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                                    </svg>  
                                </b>
                                Description
                            </h5>
                            <p className='discription'>
                                {discription}
                            </p>
                        </div>
                        <div>
                            <h5 className='sub-title'>
                                <b>
                                    <svg stroke='currentColor' fill='currentColor' strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                    </svg>
                                </b>
                                Use Skill
                            </h5>
                            <ul className='skill-list'>
                                {
                                    usingSkill.map((text, index) => {   
                                        return(
                                            <li key={index}>
                                                -
                                                {text}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <b>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                                </svg>
                            </b>
                            Source
                            <a href={srcLink}>
                                {srcLink}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  