import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Giriþ Yap</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    className="input-field"
                    placeholder="Kullanýcý Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Þifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">GÝRÝÞ</button>
            </form>
            <div className="link-text">
                <p>Henüz hesabýnýz yok mu? <a href="/register">ÜYE OL</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
