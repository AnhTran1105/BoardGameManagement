import usePortal from 'react-cool-portal';
import { useState } from 'react';
import Tooltip from '@tippyjs/react';

function Boardgames() {
    const { Portal, show, hide } = usePortal({
        defaultShow: false,
    });

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        playerNumberMin: '',
        playerNumberMax: '',
        durationMin: '',
        durationMax: '',
        ageLimit: '',
        publisher: '',
        price: '',
        releaseDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
    return (
        <div className="container pad-t-32">
            <h3 className="app-section-title title is-2">
                Board game list
                <div className="action-btns">
                    <Tooltip content="Create new board game">
                        <button className="app-btn success-btn" onClick={show}>
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    id="add-account"
                                >
                                    <path d="M21,10.5H20v-1a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm-7.7,1.72A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Z"></path>
                                </svg>
                            </i>
                            New
                        </button>
                    </Tooltip>
                    <Tooltip content="Delete board game">
                        <button className="app-btn danger-btn">
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
                                            {/* <div className="opacity "></div> */}
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
            <Portal>
                <div className="app-portal-modal">
                    <div className="modal is-active">
                        <div role="presentation" className="modal-background">
                            <div className="modal-content">
                                <div className="form center">
                                    <div className="form-header">
                                        <h1>Create new board game</h1>
                                        <Tooltip content="Close">
                                            <button className="app-btn" onClick={hide}>
                                                <i className="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        id="close"
                                                        width="20"
                                                        height="20"
                                                    >
                                                        <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                                                    </svg>
                                                </i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                    <div className="form-body">
                                        <form onSubmit={handleSubmit}>
                                            <label htmlFor="title">Title</label>
                                            <input
                                                className="form-control input-block"
                                                name="title"
                                                type="text"
                                                value={formData.title}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="description">Description</label>
                                            <input
                                                className="form-control input-block"
                                                name="description"
                                                type="text"
                                                value={formData.description}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="imageUrl">Link to image</label>
                                            <input
                                                className="form-control input-block"
                                                name="imageUrl"
                                                type="text"
                                                value={formData.imageUrl}
                                                onChange={handleChange}
                                            />
                                            <div className="flex-items">
                                                <div>
                                                    <label htmlFor="playerNumberMin">
                                                        Minimum players
                                                    </label>
                                                    <input
                                                        className="form-control form-control input-block"
                                                        name="playerNumberMin"
                                                        type="number"
                                                        value={formData.playerNumberMin}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="playerNumberMax">
                                                        Maximum players
                                                    </label>
                                                    <input
                                                        className="form-control form-control input-block"
                                                        name="playerNumberMax"
                                                        type="number"
                                                        value={formData.playerNumberMax}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-items">
                                                <div>
                                                    <label htmlFor="durationMin">
                                                        Minimum duration
                                                    </label>
                                                    <input
                                                        className="form-control form-control input-block"
                                                        name="durationMin"
                                                        type="number"
                                                        value={formData.durationMin}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="durationMax">
                                                        Maximum duration
                                                    </label>
                                                    <input
                                                        className="form-control form-control input-block"
                                                        name="durationMax"
                                                        type="number"
                                                        value={formData.durationMax}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-items">
                                                <div>
                                                    <label htmlFor="ageLimit">Age limit</label>
                                                    <input
                                                        className="form-control form-control input-block"
                                                        name="ageLimit"
                                                        type="number"
                                                        value={formData.ageLimit}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="price">Price</label>
                                                    <input
                                                        className="form-control form-control input-block"
                                                        name="price"
                                                        type="number"
                                                        value={formData.price}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <label htmlFor="publisher">Publisher</label>
                                            <input
                                                className="form-control input-block"
                                                name="publisher"
                                                type="text"
                                                value={formData.publisher}
                                                onChange={handleChange}
                                            />

                                            <label htmlFor="releaseDate">Release date</label>
                                            <input
                                                className="form-control input-block"
                                                name="releaseDate"
                                                type="date"
                                                value={formData.releaseDate}
                                                onChange={handleChange}
                                            />
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                            >
                                                Add board game
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Portal>
        </div>
    );
}

export default Boardgames;
