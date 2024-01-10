import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {
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
        referer: '',
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
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register/employer/', formData);
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
                                    onchange={handleInputChange}
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
                                    id="user.email_address"
                                    value={formData.user.email_address}
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

                                <label className="form-label" htmlFor="level_of_education">Level of Education</label>
                                <select
                                    className="form-control"
                                    id="in_school"
                                    value={formData.in_school}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value='' disabled>

                                    </option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>

                                <label className="form-label" htmlFor="employed">Are you employed?</label>
                                <select
                                    className="form-control"
                                    id="employment"
                                    value={formData.employmeny}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value='' disabled>

                                    </option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>

                                <label className="form-label" htmlFor="in_business">Are you in business?</label>
                                <select
                                    className="form-control"
                                    id="in_business"
                                    value={formData.in_business}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value='' disabled>

                                    </option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>

                                <label className="form-label" htmlFor="level_of_education">Level of Education</label>
                                <select
                                    className="form-control"
                                    id="level_of_education"
                                    value={formData.level_of_education}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value='' disable>
                                        Select Type
                                    </option>

                                    <option value="PRIMARY">Pri</option>
                                    <option value="SECONDARY">Sec</option>
                                    <option value="College">coll</option>
                                    <option value="Unversity">Uni</option>

                                </select>

                                <label className="form-label" htmlFor="interest_areas">Areas of Interests</label>
                                <select
                                    className="form-control"
                                    id="interest_area"
                                    value={formData.interest_area}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value='' disable>
                                        Select Type
                                    </option>

                                    <option value="Tvet">TVET</option>
                                    <option value="Employed">EMPLOYED</option>
                                    <option value="Businesss">BUSINESS</option>
                                    <option value="Arts">ARTS</option>
                                    <option value="Enterpreneur">Enterpreneur</option>
                                    <option value="Digital">Digital</option>
                                    <option value="job_search">Job search</option>
                                    <option value="Health">Health</option>
                                    <option value="Tourism">Tourism</option>


                                </select>

                                <label className="form-label mt-2" htmlFor="last_name">Other areas of interest</label>
                                <input
                                    className="form-control"
                                    id="other_interest"
                                    value={formData.user.other_interest}
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

