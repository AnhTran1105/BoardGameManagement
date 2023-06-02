import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar() {
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
                        <li className="app-navbar-item">
                            <div className="app-navbar-item-wrapper">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive
                                            ? 'is-active app-navbar-link'
                                            : 'app-navbar-link'
                                    }
                                    to="/"
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
                        <li className="app-navbar-item ">
                            <div className="app-navbar-item-wrapper">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive
                                            ? 'is-active app-navbar-link'
                                            : 'app-navbar-link'
                                    }
                                    to="/products"
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
                                    Products
                                </NavLink>
                            </div>
                        </li>
                        <li className="app-navbar-item">
                            <div className="app-navbar-item-wrapper">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive
                                            ? 'is-active app-navbar-link'
                                            : 'app-navbar-link'
                                    }
                                    to="/store"
                                >
                                    <i className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="24"
                                            viewBox="0 0 48 48"
                                            id="store"
                                        >
                                            <path d="M6 24c2.316 0 4.404-.9 6-2.334V36h24V21.666C37.593 23.1 39.687 24 42 24v18H6V24zM42 0l6 15c0 3.312-2.688 6-6 6s-6-2.688-6-6c0 3.312-2.688 6-6 6s-6-2.688-6-6c0 3.312-2.688 6-6 6s-6-2.688-6-6c0 3.312-2.688 6-6 6s-6-2.688-6-6L6 0h36zM3 48v-3h42v3H3z"></path>
                                        </svg>
                                    </i>
                                    Store
                                </NavLink>
                            </div>
                        </li>
                        <li className="app-navbar-item">
                            <div className="app-navbar-item-wrapper">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive
                                            ? 'is-active app-navbar-link'
                                            : 'app-navbar-link'
                                    }
                                    to="/customer"
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
                                    Clients
                                </NavLink>
                            </div>
                        </li>
                        <li className="app-navbar-item">
                            <div className="app-navbar-item-wrapper">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive
                                            ? 'is-active app-navbar-link'
                                            : 'app-navbar-link'
                                    }
                                    to="/finances"
                                >
                                    <i className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            id="finance"
                                            viewBox="0 0 32 32"
                                        >
                                            <path d="M16 2.5c7.462 0 13.5 6.038 13.5 13.5S23.462 29.5 16 29.5 2.5 23.462 2.5 16 8.538 2.5 16 2.5Zm0 2.113C9.717 4.613 4.613 9.717 4.613 16S9.717 27.387 16 27.387 27.387 22.283 27.387 16 22.283 4.613 16 4.613Zm0 1A10.38 10.38 0 0 1 26.387 16 10.38 10.38 0 0 1 16 26.387 10.38 10.38 0 0 1 5.613 16 10.38 10.38 0 0 1 16 5.613Zm-1.5 2.89v2.036a3.508 3.508 0 0 0-2.533 1.713 3.504 3.504 0 0 0 0 3.5 3.506 3.506 0 0 0 2.533 1.71v1.042h-3v2.998h3v2.002h3v-2.041a3.504 3.504 0 0 0 2.531-1.711 3.504 3.504 0 0 0 0-3.5 3.506 3.506 0 0 0-2.531-1.713v-1.037h3v-2.998h-3v-2zm1 1h1v13.001h-1V10.502zm2 2h2v.999h-2zm-3 .134v1.154c-.294.126-.636.176-.8.461a1.503 1.503 0 0 0 0 1.5c.164.285.506.335.8.46v1.155c-.683-.147-1.31-.498-1.666-1.115a2.504 2.504 0 0 1 0-2.5c.356-.618.983-.968 1.666-1.115zm0 2.357v.016-.016zm3 1.643c.682.147 1.307.497 1.664 1.115a2.504 2.504 0 0 1 0 2.5c-.357.618-.982.968-1.664 1.115v-1.154c.293-.126.635-.177.799-.461a1.503 1.503 0 0 0 0-1.5c-.164-.284-.506-.335-.799-.461zm-5 3.867h2v.998h-2z"></path>
                                        </svg>
                                    </i>
                                    Finances
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
