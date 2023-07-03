import formatDate from '~/utils/formatDate';
import Tooltip from '@tippyjs/react';
import { useRef, useEffect, useState } from 'react';
import usePortal from 'react-cool-portal';
import axios from '~/utils/axios';

function BoardgameDetail({ props }) {
    const { Portal, show, hide } = usePortal({
        defaultShow: false,
    });

    const modalRef = useRef();
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                hide();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = formData.title;
        const description = formData.description;
        const imageUrl = formData.imageUrl;
        const playerNumberMin = formData.playerNumberMin;
        const playerNumberMax = formData.playerNumberMax;
        const durationMin = formData.durationMin;
        const durationMax = formData.durationMax;
        const ageLimit = formData.ageLimit;
        const publisher = formData.publisher;
        const price = formData.price;
        const releaseDate = formData.releaseDate;

        const response = await axios.post('boardgame/update', {
            title,
            description,
            imageUrl,
            playerNumberMin,
            playerNumberMax,
            durationMin,
            durationMax,
            ageLimit,
            publisher,
            price,
            releaseDate,
        });
        console.log(response);

        window.location.reload();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="container pad-t-32">
            <h3 className="app-section-title title is-2">
                Board game details
                <div className="action-btns">
                    <Tooltip content="Update board game">
                        <button className="app-btn normal-btn" onClick={show}>
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    id="pencil"
                                    width="20"
                                    height="20"
                                >
                                    <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"></path>
                                </svg>
                            </i>
                            Update
                        </button>
                    </Tooltip>
                </div>
            </h3>
            <div className="container boardgame-detail-section">
                <div className="media">
                    <div className="media-left">
                        <div className="boardgame-card">
                            <div>
                                <div className="card-image">
                                    <figure className="image">
                                        <img
                                            src="https://cdn-ext.fanatical.com/production/product/1280x720/a774d35b-743d-4277-a719-55a0a01f5b1f.jpg"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="media-content">
                        <h3 className="title">
                            Naruto shippuden ultimate ninja storm revolution 1
                        </h3>
                        <h1 className="subtitle">Naruto boardgame</h1>
                    </div>
                </div>
                <div className="boardgame-content">
                    <div className="content-wrapper">
                        <ul className="boardgame-content-list">
                            <li>
                                <span>
                                    <p className="list-title">Publisher:</p>Japanime Games, Yoka
                                    Boardgames, Yoka by Tsume
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="list-title">Price:</p>1500$
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="list-title">Release date:</p>
                                    {formatDate('2023-06-30')}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="list-title">Age limit:</p>10
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="list-title">Minimum duration:</p>15
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="list-title">Maximum duration:</p>60
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="list-title">Minimum players:</p>2
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="list-title">Maximum players:</p>4
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="list-title">Create at:</p>
                                    {formatDate('2023-06-14T05:32:37.963+00:00'.split('T')[0])}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <p className="list-title">Update at:</p>null
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <Portal>
                    <div className="app-portal-modal">
                        <div ref={modalRef} className="modal is-active">
                            <div role="presentation" className="modal-background">
                                <div className="modal-content">
                                    <div className="form center">
                                        <div className="form-header">
                                            <h1>Update board game</h1>
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
                                                    Update board game
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
        </div>
    );
}

export default BoardgameDetail;
