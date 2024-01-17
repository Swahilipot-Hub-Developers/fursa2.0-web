import { useState, useEffect } from 'react';

const EditProfile = () => {
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
    })

    useEffect(() => {
        // Simulate fetching existing seeker details from an endpoint
        fetch('https://swahilipot.up.railway.app/api/')  // Replace with your actual API endpoint
            .then(response => response.json())
            .then(existingSeekerDetails => {
                setFormData(existingSeekerDetails);
            })
            .catch(error => console.error('Error fetching seeker details:', error));
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for handling form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <div>
                <h3>Edit your profile details</h3>
            </div>
            <div>
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
            </div>
        </div>
    )
}

export default EditProfile;