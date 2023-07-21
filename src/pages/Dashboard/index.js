import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

import { useEffect, useState } from 'react';
import axios from '~/utils/axios';

function Dashboard() {
    const [boardgames, setBoardgames] = useState(null);
    const [users, setUsers] = useState(null);
    const [contracts, setContracts] = useState(null);
    const [data, setData] = useState(null);

    // const data = [{ name: 'May', boardgame: 20, user: 10, contract: 5 }];

    useEffect(() => {
        (async () => {
            await axios
                .get('boardgame/get-all')
                .then((response) => setBoardgames(response.boardgames))
                .catch((error) => console.error(error));
        })();
        (async () => {
            await axios
                .get('user/get-all')
                .then((response) => setUsers(response.users))
                .catch((error) => console.error(error));
        })();
        (async () => {
            await axios
                .get('contract/get-all')
                .then((response) => setContracts(response.contracts))
                .catch((error) => console.error(error));
        })();
    }, []);

    useEffect(() => {
        if (boardgames && users && contracts) {
            setData([
                {
                    name: 'July',
                    boardgame: boardgames.length,
                    user: users.length,
                    contract: contracts.length,
                },
            ]);
        }
    }, [boardgames, users, contracts]);

    if (!data) {
        return null;
    }

    console.log(boardgames);

    return (
        <div className="container pad-t-32">
            <h3 className="app-section-title title is-2">Dashboard</h3>
            <div className="content-wrapper">
                <center className="chart-name">
                    Chart of board game, user, and contract statistics
                </center>
                <ResponsiveContainer width={'95%'} height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="boardgame" fill="#8884d8" />
                        <Bar dataKey="user" fill="#82ca9d" />
                        <Bar dataKey="contract" fill="#ffc658" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Dashboard;
