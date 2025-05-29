import '@/app/Career/career.css'
import '@/app/About/about.css'
import jsonData from '@/app/data.json';

export default function Career() {
    const imgPath = jsonData.main;
    return (
      <div className="about-main-view">
        <div>
            <div className="img-view">
                <img className='img-view-img' src={imgPath.mainImg}></img>
            </div>
            <div className="about-text-view">
                <div className="about-contents-view">
                    <div className="about-contents">
                        <div className="about">
                            <span>
                                <h3>
                                    Career
                                </h3>
                            </span>
                            <div className='text'>
                                <div>
                                    <>
                                        <div className='corp-name'>
                                            아이커머
                                        </div>
                                        <div className='corp-length'>
                                            2023.08 ~ 2024.05 (약 10개월)
                                        </div>
                                        <br/>
                                    </>
                                    <div className='corp-description'>
                                        <div className='sub-title'>
                                            신규 사업 투입
                                        </div>
                                        <ul className='list-style'>
                                            <li>
                                                RAID Controller 설정
                                            </li>
                                            <li>
                                                RAID Controller 설정
                                            </li>
                                            <li>
                                                OS 설치 (RHEL, CentOS, Unbuntu, Windows Server 등)
                                            </li>
                                            <li>
                                                RHEL Repository 설정
                                            </li>
                                            <li>
                                                네트워크 설정 (IP 셋팅, 네트워크 이중화, hostname 설정 등)
                                            </li>
                                        </ul>
                                    </div>
                                    <br/>
                                    <div>
                                        <div className='sub-title'>
                                            하드웨어 유지보수
                                        </div>
                                        <ul className='list-style'>
                                            <li>
                                                정기 점검
                                            </li>
                                            <li>
                                                x86 서버 장애 접수 및 장애 조치
                                            </li>
                                        </ul>
                                    </div>
                                    <br/>
                                    <div>
                                        <div className='sub-title'>
                                            활동
                                        </div>
                                        <ul className='list-style'>
                                            <li>삼성 라이온즈 HP-UX 서버 점검</li>
                                            <li>(천안) 세메스 HPE 서버 정검</li>
                                            <li>삼성 SDI 2024년 차세대 서버 설치 투입</li>
                                            <li>울산 SDI 전산실 이전 작업 투입</li>
                                            <li>평택 삼성 반도체 </li>
                                            <li>(파주, 광주)현대 오토에버 HPE X86 서버 유지보수</li>
                                            <li>여주대학교 신규 가상화 서버 설치 투입</li>
                                            <li>서버 세팅 자동화 Shell Script 작성</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  