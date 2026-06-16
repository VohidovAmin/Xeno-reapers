import { useNavigate } from 'react-router-dom'
import './hero.css'
import { useState } from 'react';


const Hero = () => {
    const navigate = useNavigate();
    const [isLeaving, setIsLeaving] = useState(false);


    const handleMouseMove = (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = (e.clientX / width) - 0.5;
        const y = (e.clientY / height) - 0.5;
        const moveX = x * 30;
        const moveY = y * 30;

        e.currentTarget.style.setProperty('--mouse-x', `${moveX}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${moveY}px`);
    }

    return (
        <section className={`hero-section ${isLeaving ? 'intro-fade-out' : ''}`}
            onMouseMove={handleMouseMove}>
            <div className="left-column flex flex-col gap-10">
                <div className='intro-header'>
                    <div className='intro-name'>
                        <div className='title-wrapper'>
                            <p className='intro-xeno'>XENO</p>
                            <div className='intro-reapers'>
                                <p>REAPERS</p>
                            </div>
                            <p className='intf'>SYSTEM INTERFACE v4.0.2</p>
                        </div>
                        <div className='intro-shadow'></div>
                    </div>
                </div>

                <div className='intro-about'>
                    <h1 className='intro-title'>ABOUT THE GAME</h1>
                    <p className='intro-desc'>Descend into the Midnight Void. As a Reaper, you must
                        navigate shifting arcane storms and mechanical ruins of a
                        dead civilization. A tactical first-person odyssey where
                        magic meets high-velocity warfare.
                    </p>
                    <div className='about-icon'>
                        <svg width="64" height="85" viewBox="0 0 64 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.1">
                                <path d="M40 85C28.4167 82.0833 18.8542 75.4375 11.3125 65.0625C3.77083 54.6875 0 43.1667 0 30.5V0L40 -15L80 0V30.5C80 43.1667 76.2292 54.6875 68.6875 65.0625C61.1458 75.4375 51.5833 82.0833 40 85ZM40 74.5C48.6667 71.75 55.8333 66.25 61.5 58C67.1667 49.75 70 40.5833 70 30.5V6.875L40 -4.375L10 6.875V30.5C10 40.5833 12.8333 49.75 18.5 58C24.1667 66.25 31.3333 71.75 40 74.5Z" fill="#E3E2E2" />
                            </g>
                        </svg>
                    </div>
                </div>

                <button className='enter-btn'
                    onClick={() => {
                        setIsLeaving(true);
                        setTimeout(() => {
                            navigate('/heroes')
                        }, 500)
                    }}>
                    <div className='enter-btn-content'>
                        <span>ENTER THE WORLD</span>
                        <svg className='enter-btn-icon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#480081" />
                        </svg>
                    </div>

                    <svg className='enter-btn-bg' width="358" height="72" viewBox="0 0 358 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.72 0H357.2L321.48 72H0L35.72 0Z" fill="#dcb8ff" />
                    </svg>
                </button>
            </div>
            <div className="right-column flex items-center">
                <div className='trailer'>
                    <div className='slide-trailer'></div>
                    <p className='trailer-title'>RELEASE TRAILER</p>
                </div>
            </div>
        </section>
    )
}

export default Hero