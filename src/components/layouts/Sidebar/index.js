import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar({ setPage }) {
    function itemClick(position) {
        setPage(position);
    };

    return (
        <aside className="app-sidebar">
            <div className="sidebar-wrapper">
                <nav className="app-navbar">
                    <div className="app-navbar-brand">
                        <div className="app-navbar-item">
                            <button className="app-btn button">
                                <Link to="/">
                                    <div className="app-logo"></div>
                                </Link>
                            </button>
                        </div>
                    </div>
                </nav>
                <nav className="app-navbar app-navbar-main">
                    <ul className="app-navbar-menu">
                        <li className="app-navbar-item" onClick={() => itemClick(0)}>
                            <div className="app-navbar-item-wrapper">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive
                                            ? 'is-active app-navbar-link'
                                            : 'app-navbar-link'
                                    }
                                >
                                    <i className="icon">
                                        <svg
                                            id="SvgjsSvg1024"
                                            width="24"
                                            height="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                        >
                                            <defs id="SvgjsDefs1025"></defs>
                                            <g id="SvgjsG1026">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                    <path
                                                        d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
                                                        fill="#ffffff"
                                                        className="color000 svgShape"
                                                    ></path>
                                                </svg>
                                            </g>
                                        </svg>
                                    </i>
                                    Dashboard
                                </NavLink>
                            </div>
                        </li>
                        <li className="app-navbar-item " onClick={() => itemClick(1)}>
                            <div className="app-navbar-item-wrapper">
                                <NavLink
                                    className='app-navbar-link'
                                >
                                    <i className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32"
                                            width="24"
                                            height="24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.707 5.994h14.586l-3 3H7.707zM26 6.701v14.586l-3 3V9.701zM7 9.994h15v15H7z"
                                                color="#000"
                                                style={{
                                                    transform: 'translate(-5px, -5px) scale(1.3)',
                                                }}
                                                className="color000 svgShape"
                                            ></path>
                                        </svg>
                                    </i>
                                    <div style={{ color: 'black' }}>
                                        Boardgames
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                        <li className="app-navbar-item" onClick={() => itemClick(2)}>
                            <div className="app-navbar-item-wrapper">
                                <NavLink
                                    className='app-navbar-link'
                                >
                                    <i className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="24"
                                            viewBox="0 0 48 48"
                                        >
                                            <path d="M6 24c2.316 0 4.404-.9 6-2.334V36h24V21.666C37.593 23.1 39.687 24 42 24v18H6V24zM42 0l6 15c0 3.312-2.688 6-6 6s-6-2.688-6-6c0 3.312-2.688 6-6 6s-6-2.688-6-6c0 3.312-2.688 6-6 6s-6-2.688-6-6c0 3.312-2.688 6-6 6s-6-2.688-6-6L6 0h36zM3 48v-3h42v3H3z"></path>
                                        </svg>
                                    </i>
                                    <div style={{ color: 'black' }}>
                                        Users
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                        <li className="app-navbar-item" onClick={() => itemClick(3)}>
                            <div className="app-navbar-item-wrapper">
                                <NavLink
                                    className='app-navbar-link'
                                >
                                    <i className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="clients"
                                            width="24"
                                            height="24"
                                        >
                                            <g data-name="Layer 2">
                                                <path d="M4 11A3 3 0 1 0 7 8 3 3 0 0 0 4 11zm4 0a1 1 0 1 1-1-1A1 1 0 0 1 8 11zM15 13a7 7 0 0 0-5.55 2.73 4.48 4.48 0 0 0-1.12-.43l-.16 0a4.87 4.87 0 0 0-2.34 0l-.16 0A4.84 4.84 0 0 0 2 20v1H22V20A7 7 0 0 0 15 13zM8.07 19H4.18a2.82 2.82 0 0 1 2-1.76l.16 0a2.93 2.93 0 0 1 1.38 0l.16 0a2.34 2.34 0 0 1 .62.24A6.94 6.94 0 0 0 8.07 19z"></path>
                                                <circle cx="15" cy="8" r="4"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <div style={{ color: 'black' }}>
                                        Contracts
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="sidebar-divide"></div>
            </div>
        </aside>
    );
}

export default Sidebar;
