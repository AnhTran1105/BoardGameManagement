import Header from '~/components/layouts/Header';
import Sidebar from '~/components/layouts/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Boardgames from '../Boardgames';
import Users from '../Users';
import Contracts from '../Contracts';
import ContractCreation from '../ContractCreation';

function Home() {
    return (
        <div className="app-layout">
            <Header />
            <Sidebar />
            <div className="app-box app-mainpage">
                <div
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <main
                        className="app-section"
                        id="body-scroll"
                        style={{
                            position: 'absolute',
                            inset: '0px',
                            overflow: 'hidden scroll',
                            // marginRight: '-6px',
                            marginBottom: '0px',
                        }}
                    >
                        <div className="container home-page-content">
                            <Routes>
                                <Route path="/boardgames" element={<Boardgames />} />
                                <Route path="/users" element={<Users />} />
                                <Route path="/contracts" element={<Contracts />} />
                                <Route path="/contracts/create" element={<ContractCreation />} />
                            </Routes>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Home;