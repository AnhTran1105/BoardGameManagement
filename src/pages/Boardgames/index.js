function Boardgames() {
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boardgames;
