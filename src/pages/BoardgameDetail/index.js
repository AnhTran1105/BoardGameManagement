import formatDate from '~/utils/formatDate';
import Tooltip from '@tippyjs/react';

function BoardgameDetail() {
    return (
        <div className="container pad-t-32">
            <h3 className="app-section-title title is-2">
                Board game details
                <div className="action-btns">
                    <Tooltip content="Update board game">
                        <button className="app-btn normal-btn">
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
            </div>
        </div>
    );
}

export default BoardgameDetail;
