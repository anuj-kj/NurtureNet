
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { credentialLogin, googleLogin } from '../../services/authService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const jwtModel = await credentialLogin(username, password);
           
            localStorage.setItem('token', jwtModel.token);
            navigate('/organizations');
        } catch (err) {
            console.log(err);
            setError('Invalid username or password');
        }
    };
    const handleGoogleLogin = async () => {
        try {
            window.location.href = 'http://localhost:5158/api/auth/google-login';
        } catch (err) {
            console.error('Google login failed', err);
        }
    };

    return (
        <>
        <div className="container py-5">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
          <div className="container py-5">
          <h1>Login</h1>
          <button className="btn btn-primary" onClick={handleGoogleLogin}>
              Login with Google
          </button>
      </div>
        </>
    );
};

export default Login;