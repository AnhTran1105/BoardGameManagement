import Tooltip from '@tippyjs/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '~/utils/axios';

function Contracts() {
    const [contracts, setContracts] = useState(null);

    useEffect(() => {
        (async () => {
            await axios
                .get('contract/get-all')
                .then((response) => setContracts(response.contracts))
                .catch((error) => console.error(error));
        })();
    }, []);

    if (!contracts) {
        return null;
    }

    return (
        <div className="container pad-t-32">
            <h3 className="app-section-title title is-2">
                Contract list
                <div className="action-btns">
                    <Tooltip content="Create new contract">
                        <Link to="/contracts/create" className="app-btn success-btn">
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100 100"
                                    width="24"
                                    height="24"
                                    id="add-file"
                                >
                                    <path d="M27 57c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2H29c-1.1 0-2-.9-2-2zm2-8h28c1.1 0 2-.9 2-2s-.9-2-2-2H29c-1.1 0-2 .9-2 2s.9 2 2 2zm58 28c0 9.92-8.08 18-18 18-6.23 0-11.72-3.18-14.96-8H15c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h34c.14 0 .27.01.4.04.08.02.17.05.25.08l.12.03c.09.04.17.09.26.14.03.02.06.03.08.05.11.07.21.15.31.25l21.99 21.99c.1.1.18.2.25.31.02.02.03.05.05.08.05.09.1.17.14.26l.03.12c.03.08.06.17.08.25.03.13.04.26.04.4v30.46c8 1.83 14 8.99 14 17.54zM51 27h15.17L51 11.83V27zM27 67c0-1.1.9-2 2-2h26.62c3.3-3.67 8.07-6 13.38-6V31H49c-1.1 0-2-.9-2-2V9H17v74h35.05c-.67-1.88-1.05-3.89-1.05-6 0-2.88.7-5.59 1.9-8H29c-1.1 0-2-.9-2-2zm56 10c0-7.72-6.28-14-14-14s-14 6.28-14 14 6.28 14 14 14 14-6.28 14-14zm-8-2h-4v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4v4c0 1.1.9 2 2 2s2-.9 2-2v-4h4c1.1 0 2-.9 2-2s-.9-2-2-2z"></path>
                                </svg>
                            </i>
                            New
                        </Link>
                    </Tooltip>
                    <Tooltip content="Delete contract">
                        <button className="app-btn normal-btn">
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width="24"
                                    height="24"
                                    id="delete"
                                >
                                    <path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path>
                                </svg>
                            </i>
                            Delete
                        </button>
                    </Tooltip>
                </div>
            </h3>
            <div className="list list-border">
                <div className="media list-header">
                    <div className="item-name">Lessor name</div>
                    <div className="item-name">Lessee name</div>
                    <div className="item-boardgames-title">Board games title</div>
                    <div className="item-from">Start date</div>
                    <div className="item-to">End date</div>
                </div>
                <ul className="list-item">
                    {contracts.map((item, index) => (
                        <li key={index} className="item">
                            <div className="item-name">
                                {item.lessor.name.firstName}
                                {item.lessor.name.lastName}
                            </div>
                            <div className="item-name">
                                {item.lessee.name.firstName}
                                {item.lessee.name.lastName}
                            </div>
                            <div className="item-boardgames-title">
                                {item.boardgames.map((itemBoardgame, indexBoardgame) => (
                                    <p key={indexBoardgame}>{itemBoardgame.title}</p>
                                ))}
                            </div>
                            <div className="item-from">2023-02-04</div>
                            <div className="item-to">2023-04-03</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Contracts;
