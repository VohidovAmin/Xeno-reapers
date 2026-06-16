import { useState } from 'react'
import './header.css'

const Header = () => {
    const [isActive, setIsActive] = useState('INTEL');

    return (
        <header className=''>
            <div className='container'>
                <div className="left-header flex items-center gap-8">
                    <div className="logo w-[66px] h-[32px]">
                        <img className="w-full h-full" src="src/assets/logo.svg" alt="logo" />
                    </div>
                    <nav className="flex gap-6 items-center">
                        <a href="#" className={`header-link ${isActive === 'INTEL' ? 'active' : ''}`} onClick={(e) => setIsActive(e.target.innerText)}>INTEL</a>
                        <a href="#" className={`header-link ${isActive === 'WARZONE' ? 'active' : ''}`} onClick={(e) => setIsActive(e.target.innerText)}>WARZONE</a>
                        <a href="#" className={`header-link ${isActive === 'OPERATIVES' ? 'active' : ''}`} onClick={(e) => setIsActive(e.target.innerText)}>OPERATIVES</a>
                        <a href="#" className={`header-link ${isActive === 'FACTIONS' ? 'active' : ''}`} onClick={(e) => setIsActive(e.target.innerText)}>FACTIONS</a>
                    </nav>
                </div>
                <div className="right-header flex items-center gap-6">
                    <button className='search-icon'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#CFC2D7" />
                        </svg>
                    </button>

                    <button className="btn-order">
                        <svg
                            className="btn-order-bg"
                            width="175"
                            height="38"
                            viewBox="0 0 175 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.474 0H174.74L157.266 38H0L17.474 0Z" fill="currentColor" />
                        </svg>

                        <span className="btn-order-text">PRE-ORDER NOW</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header