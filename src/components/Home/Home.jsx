import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UseContext';

const Home = () => {
    // document.title = 'Learn CSE | Home';
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h3>Home{user?.uid && ` : `}| {user?.email && user.email} | {user?.displayName && user?.displayName} |</h3>
        </div>
    );
};

export default Home;