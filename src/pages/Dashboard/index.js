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

function Dashboard() {
    const data = [
        { name: 'May', boardgame: 20, user: 10, contract: 5 },
        { name: 'Jun', boardgame: 30, user: 15, contract: 8 },
        { name: 'July', boardgame: 25, user: 12, contract: 6 },
        { name: 'August', boardgame: 12, user: 7, contract: 3 },
        { name: 'September', boardgame: 20, user: 16, contract: 10 },
        { name: 'October', boardgame: 23, user: 5, contract: 9 },
    ];

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
