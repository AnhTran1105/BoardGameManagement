import React, { useState } from 'react';
import Sidebar from '~/components/layouts/Sidebar';
import Header from '~/components/layouts/Header';
import BoardgameListView from './boardgame.component';
import UserListView from './user.component';
import ContractListView from './contract.component';

export default function Dashboard() {
    const [page, setPage] = useState(0);

    function CurrentPage() {
        if (page === 0) {
            return (
                <p>Welcome to boardgame dashboard</p>
            )
        } else if (page === 1) {
            return (
                <BoardgameListView />
            )
        } else if (page === 2) {
            return (
                <UserListView />
            )
        } else if (page === 3) {
            return (
                <ContractListView />
            )
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Sidebar setPage={setPage} />

            <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh' }}>
                <Header />

                <div style={{ flex: '1', backgroundColor: '#FFB6C1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '100px' }}>
                    <CurrentPage />
                </div>
            </div>
        </div>
    );
}
