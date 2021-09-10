import React from 'react';
// Import components
import Header from '../common/Header/Header'

const MainLayout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;