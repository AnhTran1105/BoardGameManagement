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
                <div className="sidebar-divide"></div>
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
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path
                                                d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
                                                fill="var(--text-primary)"
                                                className="color000 svgShape dashboard-ic"
                                            ></path>
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
                                    to="/boardgames"
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
                                    <div>Boardgames</div>
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
                                    to="/users"
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
                                    <div>Users</div>
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
                                    to="/contracts"
                                >
                                    <i className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 48 48"
                                            id="receipt"
                                        >
                                            <path
                                                d="M16,3v9a1,1,0,0,1-1,1H7a1,1,0,0,1-.75-1.66l8-9a1,1,0,0,1,1.11-.27A1,1,0,0,1,16,3ZM38,5V29.94A9,9,0,0,0,28.36,31H12v2H26.52A8.94,8.94,0,0,0,25,38a8.8,8.8,0,0,0,.52,3H9a3,3,0,0,1-3-3V14h9a2,2,0,0,0,2-2V2H35A3,3,0,0,1,38,5ZM19,13h5V11H19Zm-7,5H24V16H12Zm20,8H12v2H32Zm0-5H12v2H32ZM32,9H30V8H28V9H27a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h3v1H26v2h2v1h2V17h1a1,1,0,0,0,1-1V13a1,1,0,0,0-1-1H28V11h4ZM42,38a8,8,0,1,1-8-8A8,8,0,0,1,42,38Zm-4.29-1.29-1.42-1.42L33,38.59l-1.29-1.3-1.42,1.42,2,2a1,1,0,0,0,1.42,0Z"
                                                data-name="89 receipt, Check, Invoice, Money, Notes"
                                            ></path>
                                        </svg>
                                    </i>
                                    <div>Contracts</div>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
