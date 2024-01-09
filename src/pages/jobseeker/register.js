import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Register = () => {
    const [formData, setFormData] = useState({
        user: {
            username: '',
            first_name: '',
            last_name: '',
            email:'',
            phone_number: '',
            password: '',
        },
        is_in_school:'',
        level_of_education:'',
        is_currently_employed:'',
        is_running_business: '',
        areas_of_interest:'',
        other_areas_of_interest:'',
        referer:'',
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
        e.preventDefault()

        try {
            console.log(formData);

            const response = await fetch('http://127.0.0.1:8000/api/auth/register/oppourtunity_youth/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success, maybe redirect or show a success message
            } else {
                // Handle errors based on response status
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    };

    return (
        <div>
            <div className="align-items-center mt-5 mb-5 d-flex justify-content-center">
                <div className="col-md-6 col-12">
                    <div className="card">
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
                            <form>
                                <label className="form-label" htmlFor="first_name">First Name</label>
                                <input
                                    className="form-control"
                                    id="user.first_name"
                                    value={formData.user.first_name}
                                    onChange={handleInputChange}
                                    type="text"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="last_name">Last Name</label>
                                <input
                                    className="form-control"
                                    id="user.last_name"
                                    value={formData.user.last_name}
                                    onChange={handleInputChange}
                                    type="text"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="phone">Phone</label>
                                <input
                                    className="form-control"
                                    value={formData.user.phone_number}
                                    onChange={handleInputChange}
                                    id="user.phone_number"
                                    type="tel"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="email_address">Email Address</label>
                                <input
                                    className="form-control"
                                    id="user.email"
                                    value={formData.user.email}
                                    onChange={handleInputChange}
                                    type="email"
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

                                <div className="col-12 mt-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="invalidCheck" required/>
                                        <label className="form-check-label" for="invalidCheck">
                                            I accept the Terms and Conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 d-grid gap-2">
                                    <button className="btn bg-custom-color">Sign Up</button>
                                </div>
                            </form>

                            <div className="mt-3 mb-2 d-flex justify-content-center">
                                <div>Already have an account? <Link href="/jobseeker/login" legacyBehavior><a className="no-line">Login</a></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

