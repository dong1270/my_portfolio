'use client'

import { useEffect } from "react";
import jsonData from '@/app/data.json';

export default function Home() {
    let index = 0;
    const wordSpeed = 2000;
    const msgArr = ['창의적인', '도전적인', '발전하는'];
    const mainTable = jsonData.main;
    const mainImgPath = mainTable.mainImg;

    const changeMsg = () => {
        let msg = document.getElementsByClassName("target");
        if(index == 0) {
            msg[0].classList.replace("hidden", "active");
            msg[1].classList.replace("active", "hidden");
            msg[2].classList.replace("active", "hidden");
        } else if(index == 1) {
            msg[0].classList.replace("active", "hidden");
            msg[1].classList.replace("hidden", "active");
            msg[2].classList.replace("active", "hidden");
        } else if(index == 2) {
            msg[0].classList.replace("active", "hidden");
            msg[1].classList.replace("active", "hidden");
            msg[2].classList.replace("hidden", "active");
        }
        index++;
        if(index == 3) {
            index = 0;
        }
    };
    
    useEffect(() => {
        const myInterval = setInterval(() => changeMsg(), wordSpeed);
        return () => clearInterval(myInterval);
    },[]);

    return (
      <div className="main-view">
        <div>
            <div className="img-view">
                <img src={mainImgPath}></img>
            </div>
            <div className="text-view">
                <div className="contents-view">
                    <div className="contents">
                        <h3 className="my-name">KANG DONGSUNG</h3>
                        <span className="name-underline"/>
                        <h3 className="my-pr">
                            <div className="text-tani-box">
                                {
                                    msgArr.map((a, i) => {
                                        return (
                                            <div className="target hidden" key={i}> {a} </div>
                                        )
                                    }) 
                                }
                            </div>
                            인재
                        </h3>
                        <div className="button"> <a href="Project">Project Page</a> </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    );
  }
  