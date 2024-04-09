import React, { useContext } from 'react';
import AppContext from './AppContext';

const SideMenu = () => {
    const { setPage } = useContext(AppContext);

    return (
        <div className="side-menu bg-blue-500 text-white w-64 min-h-screen p-6">
            <ul className="space-y-4">
                <li className="text-xl hover:bg-blue-700 px-2 py-1 rounded" onClick={() => setPage('Dashboard')}>Dashboard</li>
                <li className="text-xl hover:bg-blue-700 px-2 py-1 rounded" onClick={() => setPage('History')}>History</li>
            </ul>
        </div>
    );
};

export default SideMenu;