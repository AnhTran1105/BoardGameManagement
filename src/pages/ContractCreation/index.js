import Tooltip from '@tippyjs/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function ContractCreation() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedBoardGames, setSelectedBoardGames] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleBoardGameSelect = (boardgame) => {
        const isAlreadySelected = selectedBoardGames.some(
            (selectedBoardGame) => selectedBoardGame.id === boardgame.id,
        );

        if (isAlreadySelected) {
            const updatedSelectedBoardGames = selectedBoardGames.filter(
                (selectedBoardGame) => selectedBoardGame.id !== boardgame.id,
            );
            setSelectedBoardGames(updatedSelectedBoardGames);
        } else {
            setSelectedBoardGames((prevSelectedBoardGames) => [
                ...prevSelectedBoardGames,
                boardgame,
            ]);
        }
    };

    const handleContractCreate = async (e) => {
        e.preventDefault();
        const API_URL = "http://localhost:8080/api/contract/";

        const response = await axios
            .post(API_URL + "create", {
                lesseeId: selectedUser.id,
                boardgames: selectedBoardGames,
                startAt: startDate,
                endAt: endDate,
            }, {
                headers: {
                    Authorization: `Bearer`
                }
            });
        alert(response.data.message);
        console.log(response)
    }

    const [boardgames, setBoardgames] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        async function fetchDataBoardgame() {
            const API_URL = "http://localhost:8080/api/boardgame/";
            console.log("call api");
            const response = await axios
                .get(API_URL + "get-all");
            setBoardgames(response.data.boardgames);
        }
        fetchDataBoardgame();

        async function fetchDataUser() {
            const API_URL = "http://localhost:8080/api/user/";
            console.log("call api");
            const response = await axios
                .get(API_URL + "get-all");
            setUsers(response.data.users);
        }
        fetchDataUser();
    }, []);

    if (!boardgames) {
        return null;
    }

    if (!users) {
        return null;
    }

    return (
        <>
            <div className="container pad-t-32">
                <h3 className="app-section-title title is-2">Select user</h3>
                <div className="list list-border">
                    <div className="media list-header">
                        <div className="item-name">Name</div>
                        <div className="item-phone-number">Phone number</div>
                        <div className="item-gender">Gender</div>
                        <div className="item-birthday">Birthday</div>
                        <div className="item-address">Address</div>
                    </div>
                    <ul className="list-item">
                        {users.map((user, index) => (
                            <li className="item" key={index} onClick={() => handleUserClick(user)}>
                                <div className="item-name">{user.name.firstName}{user.name.lastName}</div>
                                <div className="item-phone-number">{user.phoneNumber}</div>
                                <div className="item-gender">{user.gender}</div>
                                <div className="item-birthday">{user.birthday}</div>
                                <div className="item-address">{user.address}</div>
                                <input
                                    type="radio"
                                    name="selectedUser"
                                    className="user-select"
                                    checked={JSON.stringify(selectedUser) === JSON.stringify(user)}
                                    onChange={() => handleUserClick(user)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="container pad-t-32">
                <h3 className="app-section-title title is-2">Select board games</h3>
                <div className="carousel-wrapper">
                    <div className="carousel">
                        <div className="carousel-container">
                            {boardgames.map((item, index) => (
                                <div key={index} className="carousel-item is-fullhd-20">
                                    <div className="boardgame-card">
                                        <div>
                                            <div
                                                onClick={() => handleBoardGameSelect(item)}
                                                className="card-image"
                                            >
                                                <figure className="image">
                                                    <img src={item.imageUrl} alt="" />
                                                </figure>

                                                {selectedBoardGames.some(
                                                    (boardgame) => boardgame.id === item.id,
                                                ) ? (
                                                    <div className="opacity">
                                                        <i className="icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 48 48"
                                                                width="102"
                                                                height="102"
                                                            >
                                                                <path
                                                                    fill="#92D876"
                                                                    d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
                                                                />
                                                            </svg>
                                                        </i>
                                                    </div>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h4 className="title is-6">
                                                <a className="" title={item.title} href="/">
                                                    <span>
                                                        <span>
                                                            <span>
                                                                <span>{item.title}</span>
                                                            </span>
                                                        </span>
                                                        <span
                                                            style={{
                                                                position: 'fixed',
                                                                visibility: 'hidden',
                                                                top: '0px',
                                                                left: '0px',
                                                            }}
                                                        >
                                                            …
                                                        </span>
                                                    </span>
                                                </a>
                                            </h4>
                                            <h3 className="mt-10 subtitle">
                                                <span>
                                                    <span>
                                                        <span>{item.description}</span>
                                                    </span>
                                                    <span
                                                        style={{
                                                            position: 'fixed',
                                                            visibility: 'hidden',
                                                            top: '0px',
                                                            left: '0px',
                                                        }}
                                                    >
                                                        …
                                                    </span>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pad-t-32">
                <h3 className="app-section-title title is-2">Select contract duration</h3>
                <div className="contract-duration">
                    <div className="date-input">
                        <label htmlFor="start-date">Start date:</label>
                        <input
                            type="date"
                            name="startDate"
                            id="start-date"
                            className="form-control form-control input-block js-password-field"
                            autoCapitalize="off"
                            autoCorrect="off"
                            autoComplete="off"
                            autoFocus="autofocus"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="date-input">
                        <label htmlFor="end-date">End date:</label>
                        <input
                            type="date"
                            name="endDate"
                            id="end-date"
                            className="form-control form-control input-block js-password-field"
                            autoCapitalize="off"
                            autoCorrect="off"
                            autoComplete="off"
                            autoFocus="autofocus"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="action-btns mar-t-32 mar-b-32" style={{ justifyContent: 'flex-end' }}>
                <Tooltip content="Create new contract">
                    <Link to="/contracts/create" className="app-btn success-btn large" onClick={() => handleContractCreate()}>
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
                        Create
                    </Link>
                </Tooltip>
                <Tooltip content="Cancel">
                    <button
                        className="app-btn normal-btn large"
                        onClick={() => {
                            setSelectedUser(null);
                            setSelectedBoardGames([]);
                            setStartDate(new Date());
                            setEndDate(new Date());
                        }}
                    >
                        <i className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                id="cancel"
                            >
                                <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                            </svg>
                        </i>
                        Cancel
                    </button>
                </Tooltip>
            </div>
        </>
    );
}

export default ContractCreation;
