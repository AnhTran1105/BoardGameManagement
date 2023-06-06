import Tooltip from '@tippyjs/react';
import { useState } from 'react';

function ContractCreation() {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const boardgames = [
        {
            title: 'Naruto shippuden',
            description: 'Naruto games',
            price: 1234.0,
            release: '2023-06-03',
            image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695',
        },
        {
            title: 'Naruto shippuden',
            description: 'Naruto games',
            price: 1234.0,
            release: '2023-06-03',
            image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695',
        },
        {
            title: 'Naruto shippuden',
            description: 'Naruto games',
            price: 1234.0,
            release: '2023-06-03',
            image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695',
        },
        {
            title: 'Naruto shippuden',
            description: 'Naruto games',
            price: 1234.0,
            release: '2023-06-03',
            image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695',
        },
    ];

    const users = [
        {
            name: 'Uchiha Sasuke 1',
            phoneNumber: '0938273261',
            gender: 'Male',
            birthday: '2003-03-19',
            address: '12/34 CMT8, P15, Q.10, TPHCM',
        },
        {
            name: 'Uchiha Sasuke 2',
            phoneNumber: '0938273261',
            gender: 'Male',
            birthday: '2003-03-19',
            address: '12/34 CMT8, P15, Q.10, TPHCM',
        },
        {
            name: 'Uchiha Sasuke 3',
            phoneNumber: '0938273261',
            gender: 'Male',
            birthday: '2003-03-19',
            address: '12/34 CMT8, P15, Q.10, TPHCM',
        },
        {
            name: 'Uchiha Sasuke 4',
            phoneNumber: '0938273261',
            gender: 'Male',
            birthday: '2003-03-19',
            address: '12/34 CMT8, P15, Q.10, TPHCM',
        },
        {
            name: 'Uchiha Sasuke 5',
            phoneNumber: '0938273261',
            gender: 'Male',
            birthday: '2003-03-19',
            address: '12/34 CMT8, P15, Q.10, TPHCM',
        },
    ];

    return (
        <div className="container pad-t-26">
            <h1>Select user</h1>
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
                            <div className="item-name">{user.name}</div>
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
            <h1>Select boardgames</h1>
            <div className="carousel-wrapper">
                <div className="carousel">
                    <div className="carousel-container">
                        {boardgames.map((item, index) => (
                            <div key={index} className="carousel-item is-fullhd-20">
                                <div className="boardgame-card">
                                    <div>
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={item.image} alt="" />
                                            </figure>
                                            <div className="opacity "></div>
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
    );
}

export default ContractCreation;
