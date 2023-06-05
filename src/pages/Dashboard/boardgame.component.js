import React from 'react';

export default function BoardgameListView() {
    const users = [
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },
        { title: 'Naruto shippuden', description: "Naruto games", price: 1234.0, release: "2023-06-03", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/capsule_616x353.jpg?t=1683624695" },    ];

    return (
        <div style={{ flex: '1', backgroundColor: '#FFB6C1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '10px' }}>
                {users.map((user, index) => (
                    <div key={index} style={{ padding: '10px', border: '1px solid black' }}>
                        <img src={user.image} alt="Game" style={{ width: '100%', marginBottom: '10px' }} />
                        <p>Title: {user.title}</p>
                        <p>Description: {user.description}</p>
                        <p>Price: {user.price}</p>
                        <p>Release: {user.release}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
