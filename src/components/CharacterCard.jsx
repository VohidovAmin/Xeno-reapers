import { useState } from 'react'
import './characterCard.css'
import { CHARACTERS } from './characterData.js'


const CharacterCard = () => {
    const [isChanging, setIsChanging] = useState(false);
    const [currId, setCurrId] = useState(0);
    const currHero = CHARACTERS[currId];

    const selectHero = (id) => {
        setCurrId(id);
    };

    return (
        <div className={`card-hero ${isChanging ? 'bg-fade-exit' : 'bg-fade-enter'} flex justify-around`}
            style={{
                '--first-color': currHero.colorTheme.colorOne,
                '--second-color': currHero.colorTheme.colorTwo,
                '--third-color': currHero.colorTheme.colorThree,
                '--four-color': currHero.colorTheme.colorFour,
                '--five-color': currHero.colorTheme.colorFive,
                '--six-color': currHero.colorTheme.colorSix,
                '--bg-color': currHero.colorTheme.colorBg
            }}
        >
            <div className='content-card flex flex-col gap-[32px]    '>
                <div className='content'>
                    <div className='about-card flex flex-col'>
                        <div className='about-header'>
                            <p>●  SESSION_ACTIVE</p>
                        </div>

                        <div className={`about-name ${isChanging ? 'text-exit' : 'text-enter'}`} >
                            <span className='nickname1'>{currHero.title}</span>
                            <span className='nickname2'>{currHero.nickName}</span>
                        </div>

                        <div className={`about-desc ${isChanging ? 'text-exit' : 'text-enter'}`}>
                            <p>{currHero.desc}</p>
                            <div className='border-top'></div>
                            <div className='border-bottom'></div>
                        </div>
                    </div>
                </div>

                <div className='btn-container flex flex-col gap-4'>
                    <button className='play-btn'>
                        <span className="play-btn-content">
                            <p>PLAY NOW</p>
                            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 14V0L11 7L0 14ZM2 10.35L7.25 7L2 3.65V10.35Z" fill="var(--six-color)" />
                            </svg>
                        </span>

                        <svg className='play-btn-bg' width="320" height="72" viewBox="0 0 320 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 0H320L276 72H0L44 0Z" fill="var(--first-color)" />
                        </svg>

                        <div className='bg-blur'></div>
                    </button>

                    <button className='btn-enter'
                        onClick={() => {
                            setIsChanging(true)
                            setTimeout(() => {
                                setCurrId((prev) => (prev + 1) % CHARACTERS.length);
                                setIsChanging(false)
                            }, 300);
                        }}
                    >
                        <span className='enter-btn-content'>
                            <p>NEXT HERO</p>
                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.9125 12.15L8.79375 7.5H5.79375L6.3375 3.24375L2.86875 8.25H5.475L4.9125 12.15ZM3 15L3.75 9.75H0L6.75 0H8.25L7.5 6H12L4.5 15H3Z" fill="#E3E2E2" />
                            </svg>
                        </span>

                        <svg className="enter-btn-svg" width="320" height="52" viewBox="0 0 320 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24 0.5H319.5L296 51.5H0.5L24 0.5Z"
                                className="vector-shape"
                            />
                        </svg>

                        <div className='enter-btn-blur'></div>
                    </button>
                </div>

                <div className='footer-card'>
                    <div className="left-footer-card">
                        <span>SERVERS</span>
                        <p>● ONLINE</p>
                    </div>

                    <div className="mid-footer-card">
                        <span>VERSION</span>
                        <p>V.0.98.ALPHA</p>
                    </div>

                    <div className="right-footer-card">
                        <span>LATENCY</span>
                        <p>24MS</p>
                    </div>
                </div>
            </div>

            <div className={`hero-animation ${isChanging ? 'char-exit' : 'char-enter'}`}>
                <video
                    key={currHero.id}
                    className='hero-video'
                    src={currHero.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        </div>
    )
}

export default CharacterCard