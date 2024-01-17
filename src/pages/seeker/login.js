import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('https://swahilipot.up.railway.app/api/auth/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            //const { access, refresh } = response.data;

            //localStorage.setItem('access_token', access);
            //localStorage.setItem('refresh_token', refresh);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            } else {
                router.push('/seeker/dashboard')
            }


            const responseData = await response.json();
            //console.log('Login successful:', responseData);
            // Here you can handle further logic like redirection or state update

        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };



    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 col-12">
                <div className="card">
                    <Link href="/profile" legacyBehavior>
                        <a className="d-flex no-line justify-content-start px-3 pt-3">← Back to Selection Page</a>
                    </Link>
                    <div className="card-title text-center">
                        <Image
                        className="mt-4"
                        src="/logo/Fursa logo 2.png"
                        width={200}
                        height={100}
                        alt="Fursa Web"
                        />
                    </div>
                    <div className="card-body">
                        {error && <p>{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <label className="form-label" htmlFor="username">Username</label>
                            <input
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                required
                            />
                            <label className="form-label mt-2" htmlFor="password">Password</label>
                            <input
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                required
                            />
                            <button className="btn btn-primary mt-3">Login</button>
                        </form>
                        <div className="mt-3 mb-2 d-flex justify-content-between">
                            <Link href="/seeker/register" legacyBehavior>
                                <a className="no-line">Create Account</a>
                            </Link>
                            <Link href="/reset-password" legacyBehavior>
                                <a className="no-line">Forgot Password</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
