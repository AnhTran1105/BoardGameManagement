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
        <div className="container pad-t-26">
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
                        <div className="carousel-item is-fullhd-20">
                            <div className="boardgame-card">
                                <div>
                                    <div className="card-image">
                                        <figure
                                            className="image no-"
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                        >
                                            <Tooltip content="Create new board game">
                                                <button
                                                    className="add-btn app-btn"
                                                    style={{ position: 'absolute', top: '36%' }}
                                                    onClick={show}
                                                >
                                                    <i className="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            id="add"
                                                            x="0"
                                                            y="0"
                                                            version="1.1"
                                                            viewBox="0 0 29 29"
                                                            width="56"
                                                            height="56"
                                                        >
                                                            <path d="M14.5 27.071c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5S27 7.678 27 14.571s-5.607 12.5-12.5 12.5zm0-23c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5S25 20.36 25 14.571s-4.71-10.5-10.5-10.5z"></path>
                                                            <path d="M14.5 21.571a1 1 0 0 1-1-1v-12a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1z"></path>
                                                            <path d="M20.5 15.571h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
                                                        </svg>
                                                    </i>
                                                </button>
                                            </Tooltip>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                        fill="var(--text-primary)"
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
