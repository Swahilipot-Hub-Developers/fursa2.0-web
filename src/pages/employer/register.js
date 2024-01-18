import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
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
        sub_county: '',
        company_name: '',
        company_description: '',
        company_email: '',
        company_phone: '',
        company_registration_number: '',
        company_type: '',
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
            // Handle all console logs to prevent data leaks
            console.log(formData);
            const response = await axios.post('https://swahilipot.up.railway.app/auth/register/employer/', formData);
            
            if (response.ok){
                router.push('/seeker/dashboard/')
            }
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
                        {/**Employer User Details */}
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

                                <label className="form-label" htmlFor="first_name">First_name</label>
                                <input
                                    className="form-control"
                                    id="user.first_name"
                                    value={formData.user.first_name}
                                    onChange={handleInputChange}
                                    type="text"
                                    required
                                />

                                <label className="form-label" htmlFor="last_name">Last_name</label>
                                <input
                                    className="form-control"
                                    id="user.last_name"
                                    value={formData.user.last_name}
                                    onChange={handleInputChange}
                                    type="text"
                                    required
                                />

                                <label className="form-label" htmlFor="email">Email</label>
                                <input
                                    className="form-control"
                                    id="user.email"
                                    value={formData.user.email}
                                    onChange={handleInputChange}
                                    type="text"
                                    required
                                />

                                <label className="form-label" htmlFor="phone_number">Phone_number</label>
                                <input
                                    className="form-control"
                                    id="user.phone_number"
                                    value={formData.user.phone_number}
                                    onChange={handleInputChange}
                                    type="tel"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="password">Password</label>
                                <input
                                    className="form-control"
                                    id="user.password"
                                    value={formData.user.password}
                                    onChange={handleInputChange}
                                    type="password"
                                />

                                <h2>Company Details</h2>
                                <label className="form-label" htmlFor="company_name">Company Name</label>
                                <input
                                    className="form-control"
                                    id="company_name"
                                    value={formData.company_name}
                                    onChange={handleInputChange}
                                    type="text"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="company_description">Brief Description</label>
                                <textarea
                                    className="form-control"
                                    id="company_description"
                                    value={formData.company_description}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>


                                <label className="form-label mt-2" htmlFor="company_type">Employer Type</label>
                                <select
                                    className="form-control"
                                    id="company_type"
                                    value={formData.company_type}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value='' disable>
                                        Select Type
                                    </option>

                                    <option value="NGO">NGO</option>
                                    <option value="STARTUP">Startup</option>
                                    <option value="GOVERNMENT">Government</option>
                                </select>
                                <label className="form-label mt-2" htmlFor="company_type">Sub County</label>
                                <select
                                    className="form-control"
                                    id="sub_county"
                                    value={formData.sub_county}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value='' disable>
                                        Select Sub-county
                                    </option>

                                    <option value="MVITA">Mvita</option>
                                    <option value="CHANGAMWE">Changamwe</option>
                                    <option value="NYALI">Nyali</option>
                                    <option value="KISAUNI">Kisauni</option>
                                    <option value="LIKONI">Likoni</option>
                                    <option value="JOMVU">Jomvu</option>
                                    <option value="OUTSIDE MOMBASA">Outside Mombasa</option>
                                </select>
                                <label className="form-label mt-2" htmlFor="company_phone"> Company Phone</label>
                                <input
                                    className="form-control"
                                    id="company_phone"
                                    value={formData.company_phone}
                                    onChange={handleInputChange}
                                    type="tel"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="company_email">Company Email </label>
                                <input
                                    className="form-control"
                                    id="company_email"
                                    value={formData.company_email}
                                    onChange={handleInputChange}
                                    type="email"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="business_number">Business Number</label>
                                <input
                                    className="form-control"
                                    id="company_registration_number"
                                    value={formData.company_registration_number}
                                    onChange={handleInputChange}
                                    type="number"
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
                                <div>Already have an account? <Link href="/employer/login" legacyBehavior><a className="no-line">Login</a></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;