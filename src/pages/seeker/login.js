import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        user:{
            username: '',
            password: '',
        }
    })

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        const fieldId = id.split('.')[0];

        if (fieldId === 'user') {
            const subFieldId = id.split('.')[1];
            setFormData((prevFormData) => ({
                ...prevFormData,
                user: {
                    ...prevFormData.user,
                    [subFieldId]: value,
                },
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [id]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formData);
            const response = await fetch('http://127.0.0.1:8000/api/auth/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            console.log('Login successful:', response.data);
            
            if (response.ok){
                window.location.reload()
            }

        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure (e.g., display error message)
        }
    };



    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 col-12">
                <div className="card">
                    <Link href="/" legacyBehavior>
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
                        <form onSubmit={handleSubmit}>
                            <label className="form-label" htmlFor="username">Username</label>
                            <input
                                className="form-control"
                                id="user.username"
                                value={formData.user.username}
                                onChange={handleInputChange}
                                type="text"
                                required
                            />
                            <label className="form-label mt-2" htmlFor="password">Password</label>
                            <input
                                className="form-control"
                                id="user.password"
                                value={formData.user.password}
                                onChange={handleInputChange}
                                type="password"
                                required
                            />
                            <button className="btn btn-primary mt-3">Login</button>
                        </form>
                        <div className="mt-3 mb-2 d-flex justify-content-between">
                            <Link href="/seeker/register" legacyBehavior>
                                <a className="no-line">Create Account</a>
                            </Link>
                            <Link href="#" legacyBehavior>
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
