import { useStore, actions } from '~/store';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

function Header() {
    const [state, dispatch] = useStore();
    const [isVisible, setVisible] = useState(false);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const handleSearchQuery = (e) => {
        if (window.location.pathname === '/users') {
            dispatch(actions.setSearchUsers(e.target.value));
        } else {
            dispatch(actions.setSearchBoardgames(e.target.value));
        }
    };

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
                                        strokeMiterlimit="10"
                                        strokeWidth="5"
                                        rx="2"
                                        ry="2"
                                    ></rect>
                                    <path
                                        fill="none"
                                        stroke="#6a80b9"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M16.4 0v15.59M29.5 0v15.59M42.6 0v15.59"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#6a80b9"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M2.5 21.66h54"
                                    ></path>
                                    <path
                                        fill="#6a80b9"
                                        d="M27.17 28.1h4.66v4.66h-4.66zM40.27 28.1h4.66v4.66h-4.66zM14.08 28.1h4.66v4.66h-4.66zM27.17 39.83h4.66v4.66h-4.66zM40.27 39.83h4.66v4.66h-4.66zM14.08 39.83h4.66v4.66h-4.66z"
                                    ></path>
                                </g>
                            </svg>
                        </i>
                        <span className="current-date">{formattedDate}</span>
                    </div>
                </div>
                <div className="level-right">
                    <form className="search">
                        <div className="search__container">
                            <button className="app-btn button" tabIndex="0">
                                <i className="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        id="search"
                                    >
                                        <path
                                            d="M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7c1.75 0 3.348-.651 4.576-1.717l3.567 3.567a.5.5 0 1 0 .707-.707l-3.567-3.567A6.962 6.962 0 0 0 14 7c0-3.86-3.14-7-7-7zm0 1c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6z"
                                            color="#000"
                                        ></path>
                                    </svg>
                                </i>
                            </button>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    className="form-control z-input-placeholder"
                                    placeholder="Search here..."
                                    value={state.setSearchBoardgames}
                                    autoCorrect="off"
                                    spellCheck="false"
                                    onChange={(e) => handleSearchQuery(e)}
                                />
                            </div>
                        </div>
                    </form>
                    <div className="header-divide"></div>
                    <div className="notifications">
                        <i className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 2"
                                viewBox="0 0 35 35"
                                width="24"
                                height="24"
                                id="bell"
                            >
                                <path d="M17.5,34.61c-2.73,0-5.23-1.76-6.7-4.72A1.25,1.25,0,0,1,13,28.78c1,2.09,2.7,3.33,4.46,3.33s3.42-1.24,4.45-3.33a1.25,1.25,0,0,1,2.25,1.11C22.73,32.85,20.23,34.61,17.5,34.61Z"></path>
                                <path d="M27.29,29.89H7.7a4.18,4.18,0,0,1-4.17-4.18c0-1.09.73-2.1,2.17-3a2.94,2.94,0,0,0,1.39-2.49V15.29A10.3,10.3,0,0,1,17.5,5.14a10.43,10.43,0,0,1,7.35,3,9.88,9.88,0,0,1,3.06,7.18v4.92A2.94,2.94,0,0,0,29.3,22.7h0c1.44.91,2.17,1.92,2.17,3A4.18,4.18,0,0,1,27.29,29.89ZM17.5,7.64a7.79,7.79,0,0,0-7.91,7.65v4.92A5.41,5.41,0,0,1,7,24.82c-.9.56-1,.91-1,.91A1.68,1.68,0,0,0,7.7,27.39H27.29A1.68,1.68,0,0,0,29,25.71h0s-.12-.34-1-.89h0a5.42,5.42,0,0,1-2.56-4.61V15.29a7.4,7.4,0,0,0-2.3-5.38A7.92,7.92,0,0,0,17.5,7.64Z"></path>
                                <path d="M21.3,7.13a1.25,1.25,0,0,1-1.25-1.25V5.45a2.56,2.56,0,1,0-5.12,0v.43a1.25,1.25,0,0,1-2.5,0V5.72c0-.09,0-.18,0-.27a5.06,5.06,0,1,1,10.12,0,2.44,2.44,0,0,1,0,.27v.16A1.25,1.25,0,0,1,21.3,7.13Z"></path>
                            </svg>
                        </i>
                    </div>
                    <div className="settings">
                        <i className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                id="setting"
                            >
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    className="stroke-line"
                                    transform="translate(2.5 1.5)"
                                    style={{ transform: 'scale(1.15)' }}
                                >
                                    <path d="M18.3066362,6.12356982 L17.6842106,5.04347829 C17.1576365,4.12955711 15.9906873,3.8142761 15.0755149,4.33867279 L15.0755149,4.33867279 C14.6398815,4.59529992 14.1200613,4.66810845 13.6306859,4.54104256 C13.1413105,4.41397667 12.7225749,4.09747295 12.4668193,3.66132725 C12.3022855,3.38410472 12.2138742,3.06835005 12.2105264,2.74599544 L12.2105264,2.74599544 C12.2253694,2.22917739 12.030389,1.72835784 11.6700024,1.3576252 C11.3096158,0.986892553 10.814514,0.777818938 10.2974829,0.778031878 L9.04347831,0.778031878 C8.53694532,0.778031878 8.05129106,0.97987004 7.69397811,1.33890085 C7.33666515,1.69793166 7.13715288,2.18454839 7.13958814,2.69107553 L7.13958814,2.69107553 C7.12457503,3.73688099 6.27245786,4.57676682 5.22654465,4.57665906 C4.90419003,4.57331126 4.58843537,4.48489995 4.31121284,4.32036615 L4.31121284,4.32036615 C3.39604054,3.79596946 2.22909131,4.11125048 1.70251717,5.02517165 L1.03432495,6.12356982 C0.508388616,7.03634945 0.819378585,8.20256183 1.72997713,8.73226549 L1.72997713,8.73226549 C2.32188101,9.07399614 2.68650982,9.70554694 2.68650982,10.3890161 C2.68650982,11.0724852 2.32188101,11.704036 1.72997713,12.0457667 L1.72997713,12.0457667 C0.820534984,12.5718952 0.509205679,13.7352837 1.03432495,14.645309 L1.03432495,14.645309 L1.6659039,15.7345539 C1.9126252,16.1797378 2.3265816,16.5082503 2.81617164,16.6473969 C3.30576167,16.7865435 3.83061824,16.7248517 4.27459956,16.4759726 L4.27459956,16.4759726 C4.71105863,16.2212969 5.23116727,16.1515203 5.71931837,16.2821523 C6.20746948,16.4127843 6.62321383,16.7330005 6.87414191,17.1716248 C7.03867571,17.4488473 7.12708702,17.764602 7.13043482,18.0869566 L7.13043482,18.0869566 C7.13043482,19.1435014 7.98693356,20.0000001 9.04347831,20.0000001 L10.2974829,20.0000001 C11.3504633,20.0000001 12.2054882,19.1490783 12.2105264,18.0961099 L12.2105264,18.0961099 C12.2080776,17.5879925 12.4088433,17.0999783 12.7681408,16.7406809 C13.1274382,16.3813834 13.6154524,16.1806176 14.1235699,16.1830664 C14.4451523,16.1916732 14.7596081,16.2797208 15.0389017,16.4393593 L15.0389017,16.4393593 C15.9516813,16.9652957 17.1178937,16.6543057 17.6475973,15.7437072 L17.6475973,15.7437072 L18.3066362,14.645309 C18.5617324,14.2074528 18.6317479,13.6859659 18.5011783,13.1963297 C18.3706086,12.7066935 18.0502282,12.2893121 17.6109841,12.0366133 L17.6109841,12.0366133 C17.17174,11.7839145 16.8513595,11.3665332 16.7207899,10.876897 C16.5902202,10.3872608 16.6602358,9.86577384 16.9153319,9.42791767 C17.0812195,9.13829096 17.3213574,8.89815312 17.6109841,8.73226549 L17.6109841,8.73226549 C18.5161253,8.20284891 18.8263873,7.04344892 18.3066362,6.13272314 L18.3066362,6.13272314 L18.3066362,6.12356982 Z"></path>
                                    <circle cx="9.675" cy="10.389" r="2.636"></circle>
                                </g>
                            </svg>
                        </i>
                    </div>
                    <div>
                        <Tippy
                            visible={isVisible}
                            interactive
                            onClickOutside={() => setVisible(false)}
                            render={(attrs) => (
                                <div
                                    {...attrs}
                                    className="menu menu-settings setting-header header-dropdown"
                                >
                                    <ul className="menu-list">
                                        <li className="user-setting-account">
                                            <div className="info">
                                                <div className="app-avatar-frame">
                                                    <figure className="image is-42x42 is-rounded">
                                                        <img
                                                            src={require('~/static/images/user.png')}
                                                            alt=""
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="right">
                                                    <p>Signed in as</p>
                                                    <h3>
                                                        {state.loginData
                                                            ? state.loginData.manager.name
                                                                  .firstName +
                                                              ' ' +
                                                              state.loginData.manager.name.lastName
                                                            : ''}
                                                    </h3>
                                                    <i className="icon"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <div className="line-separator"></div>
                                        <li className="logout-header">
                                            <button className="logout-btn">
                                                <i className="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        id="logout"
                                                        style={{ transform: 'rotate(180deg)' }}
                                                    >
                                                        <path
                                                            fill="url(#paint0_linear_1233_4810)"
                                                            fillRule="evenodd"
                                                            d="M8 4C8 3.44772 8.44772 3 9 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H9C8.44772 21 8 20.5523 8 20V17C8 16.4477 8.44772 16 9 16C9.55228 16 10 16.4477 10 17V19H20V5H10V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V4ZM7.20711 7.79289C7.59763 8.18342 7.59763 8.81658 7.20711 9.20711L5.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H5.41421L7.20711 14.7929C7.59763 15.1834 7.59763 15.8166 7.20711 16.2071C6.81658 16.5976 6.18342 16.5976 5.79289 16.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.79289 7.79289C6.18342 7.40237 6.81658 7.40237 7.20711 7.79289Z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                        <defs>
                                                            <linearGradient
                                                                id="paint0_linear_1233_4810"
                                                                x1="12"
                                                                x2="12"
                                                                y1="3"
                                                                y2="21"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#F857A6"></stop>
                                                                <stop
                                                                    offset="1"
                                                                    stopColor="#FF585A"
                                                                ></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </i>
                                                <p>Sign out</p>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        >
                            <div className="avatar" onClick={() => setVisible(!isVisible)}>
                                <figure className="image is-38x38 is-rounded">
                                    <img src={require('~/static/images/user.png')} alt="" />
                                </figure>
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
