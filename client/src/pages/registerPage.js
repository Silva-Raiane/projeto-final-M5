import "../App.css";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    async function register(ev) {
        ev.preventDefault();
        
        if (!username || !email || !password) {
            setError("Please fill in all fields");
            return;
        }

        try {
            const response = await axios.post('https://projeto-final-m5-15w5.onrender.com/register-user', {
                username,
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.status === 201) {
                const { token } = response.data;
                localStorage.setItem("token", token);
                alert('Registration successful');
            } else {
                setError('Registration failed');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError(error.response.data.message);
            } else {
                console.error('Error during registration:', error.response ? error.response.data : error);
                setError('Error during registration. Please try again later.');
            }
        }
    }

    return (
        <div className="page">
            <form method="POST" className="formRegister" onSubmit={register}>
                <h1>Register</h1>
                <p>Enter your access details in the field below.</p>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Enter your username" value={username} onChange={(ev) => setUsername(ev.target.value)} autoComplete="username" />
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(ev) => setEmail(ev.target.value)} autoComplete="email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(ev) => setPassword(ev.target.value)} autoComplete="new-password" />
                <input type="submit" value="Register" className="btn" />
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}