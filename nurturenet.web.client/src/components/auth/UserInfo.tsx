import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, signOut } from '../../services/authService';


const UserInfo = () => {
    const navigate = useNavigate();
    const user = getUserInfo();

    const handleSignOut = () => {
        signOut();
        navigate('/login');
    };

    if (!user) {
        return null;
    }

    return (
        <div className="d-flex align-items-center">
            <span className="me-3">Hello, {user.username}</span>
            <button className="btn btn-outline-secondary" onClick={handleSignOut}>
                Sign Out
            </button>
        </div>
    );
};

export default UserInfo;