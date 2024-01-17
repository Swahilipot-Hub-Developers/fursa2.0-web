import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        user: {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            password: '',
        },
        is_in_school: '',
        level_of_education: '',
        is_currently_employed: '',
        is_running_business: '',
        areas_of_interest: '',
        other_areas_of_interest: '',
    });

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
            const response = await fetch('https://swahilipot.up.railway.app/api/auth/register/opportunity_youth/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok){
                router.push('/seeker/dashboard/')
            }
            // Do something with the response data if needed
            console.log(data);
            
        } catch (error) {
            console.error(error);
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
                                    id="user.phone_number"
                                    value={formData.user.phone_number}
                                    onChange={handleInputChange}
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

                                <label className="form-label mt-2">Are you in School?</label>
                                <div className="d-flex gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            id="is_in_school"
                                            name="is_in_school"
                                            value="true"
                                            checked={formData.is_in_school === 'true'}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        Yes
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            id="is_in_school"
                                            name="is_in_school"
                                            value="false"
                                            checked={formData.is_in_school === 'false'}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        No
                                    </label>
                                </div>


                                <label className="form-label mt-2">Are you employed?</label>
                                <div className="d-flex gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            id="is_currently_employed"
                                            name="is_currently_employed"
                                            value="true"
                                            checked={formData.is_currently_employed === 'true'}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        Yes
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            id="is_currently_employed"
                                            name="is_currently_employed"
                                            value="false"
                                            checked={formData.is_currently_employed === 'false'}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        No
                                    </label>
                                </div>

                                <label className="form-label mt-2">Are you in business?</label>
                                <div className="d-flex gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            id="is_running_business"
                                            name="is_running_business"
                                            value="true"
                                            checked={formData.is_running_business === 'true'}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        Yes
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            id="is_running_business"
                                            name="is_running_business"
                                            value="false"
                                            checked={formData.is_running_business === 'false'}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        No
                                    </label>
                                </div>


                                <label className="form-label mt-2" htmlFor="level_of_education">Level of Education</label>
                                <select
                                    className="form-control"
                                    id="level_of_education"
                                    value={formData.level_of_education}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value='' disable>
                                        Select Level
                                    </option>

                                    <option value="PRIMARY">Primary</option>
                                    <option value="SECONDARY">Secondary</option>
                                    <option value="SOME COLLEGE">College</option>
                                    <option value="UNIVERSITY">University</option>
                                    <option value="TVET">TVET</option>
                                </select>

                                <label className="form-label mt-2" htmlFor="interest_areas">Areas of Interests</label>
                                <select
                                    className="form-control"
                                    id="areas_of_interest"
                                    value={formData.areas_of_interest}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value='' disable>
                                        Select Type
                                    </option>

                                    <option value="TVET">TVET</option>
                                    <option value="EMPLOYED">EMPLOYED</option>
                                    <option value="BUSINESS">BUSINESS</option>
                                    <option value="ARTS">ARTS</option>
                                    <option value="ENTREPRENEUR">Enterpreneur</option>
                                    <option value="DIGITAL">Digital</option>
                                    <option value="JOB_SEARCH">Job search</option>
                                    <option value="HEALTH">Health</option>
                                    <option value="TOURISM">Tourism</option>
                                </select>

                                <label className="form-label mt-2" htmlFor="last_name">Other areas of interest</label>
                                <input
                                    className="form-control"
                                    id="other_areas_of_interest"
                                    value={formData.other_areas_of_interest}
                                    onChange={handleInputChange}
                                    type="text"
                                    required
                                />
                                <div className="col-12 mt-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="invalidCheck" required />
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
                                <div>Already have an account? <Link href="/seeker/login" legacyBehavior><a className="no-line">Login</a></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

