function Header() {
    return (
        <header className="app-header">
            <div className="level">
                <div className="level-left">
                    <div className="date-wrapper">
                        <i className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64.88 62.43"
                                id="calendar"
                                width="32"
                                height="32"
                            >
                                <g data-name="Layer 2">
                                    <path
                                        fill="#b76a8a"
                                        d="M59.88 16.43h-49v41a5 5 0 0 0 5 5h44a5 5 0 0 0 5-5v-36a5 5 0 0 0-5-5z"
                                        opacity=".15"
                                    ></path>
                                    <rect
                                        width="54"
                                        height="46"
                                        x="2.5"
                                        y="7.43"
                                        fill="none"
                                        stroke="#6a80b9"
                                        stroke-miterlimit="10"
                                        stroke-width="5"
                                        rx="2"
                                        ry="2"
                                    ></rect>
                                    <path
                                        fill="none"
                                        stroke="#6a80b9"
                                        stroke-miterlimit="10"
                                        stroke-width="3"
                                        d="M16.4 0v15.59M29.5 0v15.59M42.6 0v15.59"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#6a80b9"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                        d="M2.5 21.66h54"
                                    ></path>
                                    <path
                                        fill="#6a80b9"
                                        d="M27.17 28.1h4.66v4.66h-4.66zM40.27 28.1h4.66v4.66h-4.66zM14.08 28.1h4.66v4.66h-4.66zM27.17 39.83h4.66v4.66h-4.66zM40.27 39.83h4.66v4.66h-4.66zM14.08 39.83h4.66v4.66h-4.66z"
                                    ></path>
                                </g>
                            </svg>
                        </i>
                        <span className="current-date">June 2, 2023</span>
                    </div>
                </div>
                <div className="level-right"></div>
            </div>
        </header>
    );
}

export default Header;
