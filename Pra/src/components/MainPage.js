import React, { useState } from 'react';
import SideMenu from './SideMenu';
import AppContext from './AppContext';

const MainPage = () => {
    const [page, setPage] = useState('Dashboard');

    return (
        <AppContext.Provider value={{ page, setPage }}>
            <div className="flex">
                <SideMenu />
                <div className="main-content flex-grow p-6">
                    {page === 'Dashboard' && <h1>Dashboard</h1>}
                    {page === 'History' && <h1>History</h1>}
                </div>
            </div>
        </AppContext.Provider>
    );
};

export default MainPage;